// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint256 id;
        string name;
        address owner;
        address[] history; // Mehsul transfer tarixcesi
        uint256 creationTime; // Mehsulun yaradilma vaxti
        string productType; // Mehsul novu (elave melumat)
        string status; // Mehsulun statusu ("Istehsal", "Yoldadir", "Catdirilib")
    }

    struct User {
        string name;
        address userAddress;
        bool isAdmin;
        uint256 productCount; // Istifadecinin sahib oldugu mehsul sayi
    }

    address public admin;
    address public currentUser; // Hal-hazirda istifade olunan hesab
    uint256 public productCounter = 0;
    mapping(uint256 => Product) public generalWarehouse;
    mapping(address => Product[]) public userWarehouses;
    mapping(uint256 => string) public productLogs; // Mehsul ID-sine gore emeliyyat loglari

    User[] public users;

    // Hadiseler (Events)
    event AccountChoice(uint256 index, string name);
    event ProductAdded(uint256 indexed productId, string name, address owner);
    event ProductTransferred(uint256 indexed productId, address indexed from, address indexed to, uint256 timestamp);
    event ProductUpdated(uint256 indexed productId, string newName, string newStatus);
    event WarehouseUpdated(address indexed user, uint256 productCount);

    // Istifadecileri baslat
    constructor() {
        admin = 0x40F496Fb9866661A682Bb2f9Cc54AB62dfb7Fd5c;
        users.push(User("Admin", admin, true, 0));
        users.push(User("User2", 0x531823d5bcA8ED9C85aA326582b1C658C6B2741E, false, 0));
        users.push(User("User3", 0xE6475D747Ff0a066A175a5f35f63E73A61789e68, false, 0));
        users.push(User("User4", 0x41df3FF2B7E215a508F3a103F090f6A78a3ed246, false, 0));
        users.push(User("User5", 0x82f23bDEE34D253Bf41b13b0863918bfA5d3414B, false, 0));
        users.push(User("User6", 0xA7FD26343092156559A7ba7f2E9301A7d0F3A4d5, false, 0));
        users.push(User("User7", 0x6B53ABBb0316c583Ed949C4f195Efd3b79312D7B, false, 0));
        users.push(User("User8", 0x7B339e1C32601FF42c1b80A2E19B26aa7D7Abdc1, false, 0));
        users.push(User("User9", 0x80c4Dd1901644C535d65B3D79575efA4c43F65BA, false, 0));
        users.push(User("User10", 0x77d3965A2728fF5c0b7CAA48c5A0EECDDC2136FD, false, 0));
        currentUser = admin;
    }

    // Admin funksiyalarina mehdudiyyet qoyan modifikator
    modifier onlyAdmin() {
        require(msg.sender == admin, "Yalniz admin");
        _;
    }

    // Mehsulun movcudlugunu yoxlayan modifikator
    modifier productExists(uint256 _productId) {
        bool exists = false;
        
        if (generalWarehouse[_productId].id != 0) {
            exists = true;
        } else {
            for (uint256 i = 0; i < users.length; i++) {
                for (uint256 j = 0; j < userWarehouses[users[i].userAddress].length; j++) {
                    if (userWarehouses[users[i].userAddress][j].id == _productId) {
                        exists = true;
                        break;
                    }
                }
                if (exists) break;
            }
        }
        
        require(exists, "Movcud deyil");
        _;
    }

    // findProduct funksiyası - təkrarlanan kodu azaltmaq üçün
    function findProduct(uint256 _productId) internal view returns (Product memory product, bool found, address userAddr) {
        // Umumi depoda axtaris
        if (generalWarehouse[_productId].id != 0) {
            product = generalWarehouse[_productId];
            found = true;
        } else {
            // Istifadeci depolarinda axtaris
            for (uint256 i = 0; i < users.length && !found; i++) {
                for (uint256 j = 0; j < userWarehouses[users[i].userAddress].length; j++) {
                    if (userWarehouses[users[i].userAddress][j].id == _productId) {
                        product = userWarehouses[users[i].userAddress][j];
                        userAddr = users[i].userAddress;
                        found = true;
                        break;
                    }
                }
            }
        }
        return (product, found, userAddr);
    }

    // Hesabi deyisme ve secme funksiyasi
    function chooseAccount(uint256 _index) public {
        require(_index < users.length, "Yolnis index");
        currentUser = users[_index].userAddress; // Istifadeci hesabini secir
        emit AccountChoice(_index, users[_index].name); // Event gonder
    }

    // Yeni mehsul elave et (Yalniz admin)
    function addProductToGeneralWarehouse(string memory _name) public onlyAdmin {
        productCounter++;
        
        Product storage newProduct = generalWarehouse[productCounter];
        newProduct.id = productCounter;
        newProduct.name = _name;
        newProduct.owner = admin;
        newProduct.history.push(admin); // Ilk sahibi tarixceye elave et
        newProduct.creationTime = block.timestamp;
        newProduct.productType = "Standart";
        newProduct.status = "Istehsal olunub";
        
        productLogs[productCounter] = string(abi.encodePacked("Mehsul yaradildi: ", _name));
        
        // Adminin mehsul sayini artir
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].userAddress == admin) {
                users[i].productCount++;
                break;
            }
        }
        
        emit ProductAdded(productCounter, _name, admin);
    }

    // Mehsul elave et elave melumatlarla birlikde
    function addProductWithDetails(string memory _name, string memory _productType) public onlyAdmin {
        productCounter++;
        
        Product storage newProduct = generalWarehouse[productCounter];
        newProduct.id = productCounter;
        newProduct.name = _name;
        newProduct.owner = admin;
        newProduct.history.push(admin);
        newProduct.creationTime = block.timestamp;
        newProduct.productType = _productType;
        newProduct.status = "Istehsal olunub";
        
        productLogs[productCounter] = string(abi.encodePacked("Mehsul yaradildi: ", _name));
        
        // Adminin mehsul sayini artir
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].userAddress == admin) {
                users[i].productCount++;
                break;
            }
        }
        
        emit ProductAdded(productCounter, _name, admin);
    }

    // Admin umumi depodan istifadeciye mehsul transfer ede biler
    function transferProductFromGeneral(uint256 _productId, address _to) public onlyAdmin {
        require(generalWarehouse[_productId].id != 0, "Depoda yoxdur");

        Product storage product = generalWarehouse[_productId];
        address previousOwner = product.owner;
        product.owner = _to;
        product.status = "Transfer olunub";

        // Istifadecinin deposuna elave et
        userWarehouses[_to].push(product);
        product.history.push(_to); // Tarixceni yenile

        // Loga elave et
        productLogs[_productId] = string(abi.encodePacked(
            productLogs[_productId], 
            "\nTransfer: ", 
            addressToString(previousOwner), 
            " -> ", 
            addressToString(_to)
        ));

        // Istifadecinin mehsul sayini artir
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].userAddress == _to) {
                users[i].productCount++;
                emit WarehouseUpdated(_to, users[i].productCount);
                break;
            }
        }

        // Umumi depodan sil
        delete generalWarehouse[_productId];
        
        emit ProductTransferred(_productId, previousOwner, _to, block.timestamp);
    }

    // Istifadeciler arasi mehsul transferi
    function transferProduct(uint256 _productId, address _to) public {
        bool productFound = false;

        // Hal-hazirki istifadecinin deposunu yoxlayiriq
        Product[] storage warehouse = userWarehouses[msg.sender];

        for (uint256 i = 0; i < warehouse.length; i++) {
            if (warehouse[i].id == _productId) {
                // Mehsul tapildi, sahibini yenileyirik
                Product storage product = warehouse[i];
                address previousOwner = product.owner;
                product.owner = _to;
                product.history.push(_to);
                product.status = "Transfer olunub";

                // Mehsulu yeni istifadecinin deposuna elave edirik
                userWarehouses[_to].push(product);

                // Loga elave et
                productLogs[_productId] = string(abi.encodePacked(
                    productLogs[_productId], 
                    "\nTransfer: ", 
                    addressToString(previousOwner), 
                    " -> ", 
                    addressToString(_to)
                ));

                // Kohne sahibden mehsulu silirik
                removeProductFromUser(msg.sender, _productId);

                // Istifadecilerin mehsul saylarini yenile
                updateUserProductCounts(previousOwner, _to);

                // Hadise yarat
                emit ProductTransferred(_productId, previousOwner, _to, block.timestamp);

                productFound = true;
                break;
            }
        }

        require(productFound, "Tapilmadi");
    }

    // Istifadecinin deposundan mehsulu silmek ucun komekci funksiya
    function removeProductFromUser(address _user, uint256 _productId) internal {
        Product[] storage warehouse = userWarehouses[_user];

        for (uint256 i = 0; i < warehouse.length; i++) {
            if (warehouse[i].id == _productId) {
                // Mehsulu silirik
                warehouse[i] = warehouse[warehouse.length - 1]; // En sonuncu mehsul ile evez edirik
                warehouse.pop(); // Sonuncunu silirik
                break;
            }
        }
    }

    // Istifadecilerin mehsul saylarini yenilemek ucun komekci funksiya
    function updateUserProductCounts(address _from, address _to) internal {
        // Kohne sahibin mehsul sayini azalt
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].userAddress == _from) {
                users[i].productCount--;
                emit WarehouseUpdated(_from, users[i].productCount);
                break;
            }
        }

        // Yeni sahibin mehsul sayini artir
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].userAddress == _to) {
                users[i].productCount++;
                emit WarehouseUpdated(_to, users[i].productCount);
                break;
            }
        }
    }

    // Admin mehsulun adini yenileye biler
    function updateProductName(uint256 _productId, string memory _newName) public onlyAdmin productExists(_productId) {
        string memory oldName;
        string memory currentStatus;

        // Umumi depoda axtaris
        if (generalWarehouse[_productId].id != 0) {
            oldName = generalWarehouse[_productId].name;
            generalWarehouse[_productId].name = _newName;
            currentStatus = generalWarehouse[_productId].status;
            
            // Loga elave et
            productLogs[_productId] = string(abi.encodePacked(
                productLogs[_productId], 
                "\nAd deyisdi: ", 
                oldName, 
                " -> ", 
                _newName
            ));
        } else {
            // Istifadeci depolarinda axtaris
            bool found = false;
            for (uint256 i = 0; i < users.length && !found; i++) {
                Product[] storage warehouse = userWarehouses[users[i].userAddress];
                for (uint256 j = 0; j < warehouse.length; j++) {
                    if (warehouse[j].id == _productId) {
                        oldName = warehouse[j].name;
                        warehouse[j].name = _newName;
                        currentStatus = warehouse[j].status;
                        
                        // Loga elave et
                        productLogs[_productId] = string(abi.encodePacked(
                            productLogs[_productId], 
                            "\nAd deyisdi: ", 
                            oldName, 
                            " -> ", 
                            _newName
                        ));
                        
                        found = true;
                        break;
                    }
                }
            }
        }

        emit ProductUpdated(_productId, _newName, currentStatus);
    }

    // Mehsulun statusunu yenilemek ucun
    function updateProductStatus(uint256 _productId, string memory _newStatus) public productExists(_productId) {
        string memory oldStatus;
        string memory currentName;
        bool isOwner = false;

        // Umumi depoda axtaris
        if (generalWarehouse[_productId].id != 0) {
            isOwner = (generalWarehouse[_productId].owner == msg.sender || msg.sender == admin);
            
            if (isOwner) {
                oldStatus = generalWarehouse[_productId].status;
                currentName = generalWarehouse[_productId].name;
                generalWarehouse[_productId].status = _newStatus;
                
                // Loga elave et
                productLogs[_productId] = string(abi.encodePacked(
                    productLogs[_productId], 
                    "\nStatus: ", 
                    oldStatus, 
                    " -> ", 
                    _newStatus
                ));
            }
        } else {
            // Istifadeci depolarinda axtaris
            bool found = false;
            for (uint256 i = 0; i < users.length && !found; i++) {
                Product[] storage warehouse = userWarehouses[users[i].userAddress];
                for (uint256 j = 0; j < warehouse.length; j++) {
                    if (warehouse[j].id == _productId) {
                        isOwner = (warehouse[j].owner == msg.sender || msg.sender == admin);
                        
                        if (isOwner) {
                            oldStatus = warehouse[j].status;
                            currentName = warehouse[j].name;
                            warehouse[j].status = _newStatus;
                            
                            // Loga elave et
                            productLogs[_productId] = string(abi.encodePacked(
                                productLogs[_productId], 
                                "\nStatus: ", 
                                oldStatus, 
                                " -> ", 
                                _newStatus
                            ));
                        }
                        
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
        }

        require(isOwner, "Icaze yoxdur");
        emit ProductUpdated(_productId, currentName, _newStatus);
    }

    // Mehsul tarixcesini elde et (Umumi ve ya istifadeci deposuna esaslanaraq)
    function getProductHistory(uint256 _productId) public view productExists(_productId) returns (address[] memory) {
        (Product memory product, , ) = findProduct(_productId);
        return product.history;
    }

    // Mehsul ID-sine gore Detallari elde et
    function getProductById(uint256 _productId) public view productExists(_productId) returns (Product memory) {
        (Product memory product, , ) = findProduct(_productId);
        return product;
    }

    // Istifadecinin anbarini elde et
    function getUserWarehouse(address _user) public view returns (Product[] memory) {
        return userWarehouses[_user];
    }

    // Mehsulun log melumatlarini elde et
    function getProductLogs(uint256 _productId) public view productExists(_productId) returns (string memory) {
        return productLogs[_productId];
    }

    // Butun istifadeci sayisini qaytarir
    function getUserCount() public view returns (uint256) {
        return users.length;
    }

    // Istifadeci melumatlarini elde et
    function getUserInfo(uint256 _index) public view returns (string memory, address, bool, uint256) {
        require(_index < users.length, "Movcud deyil");
        User memory user = users[_index];
        return (user.name, user.userAddress, user.isAdmin, user.productCount);
    }

    // Address-i string tipine ceviren komekci funksiya
    function addressToString(address _addr) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2+i*2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3+i*2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}