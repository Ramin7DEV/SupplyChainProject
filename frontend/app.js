const ganacheUrl = "http://127.0.0.1:7545";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "AccountChoice",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addProductToGeneralWarehouse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productType",
				"type": "string"
			}
		],
		"name": "addProductWithDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "chooseAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ProductAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ProductTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newStatus",
				"type": "string"
			}
		],
		"name": "ProductUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferProductFromGeneral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newName",
				"type": "string"
			}
		],
		"name": "updateProductName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newStatus",
				"type": "string"
			}
		],
		"name": "updateProductStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productCount",
				"type": "uint256"
			}
		],
		"name": "WarehouseUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentUser",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "generalWarehouse",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "creationTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "getProductById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "history",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "getProductHistory",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "getProductLogs",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserWarehouse",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "history",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productLogs",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAdmin",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "productCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userWarehouses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "creationTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const contractAddress = "0x0Df76E0Ab551299990Be58bF9E13b048666c4263";
let web3;
let supplyChainContract;
let accountsInfo = [];
let usersList = [
    { name: "Admin", address: "0x0194FB86A6ce438C7E0EDBd7056e3bBE2c46dc72" }, // Admin
    { name: "User2", address: "0x5C2e13F34e62520B21B740fB489c35A15EFC6C06" },
    { name: "User3", address: "0x13d4294ABC96DED56e63501560e88aEC3EF5012A" },
    { name: "User4", address: "0xb5b49DA65602a93b9992658403939c0d86284FdC" },
    { name: "User5", address: "0xe10da7878fDFc334733EAce462E58b049f21738a" },
    { name: "User6", address: "0xFf8bE34BB8895cd85a6EC6907B59900e361e54E0" },
    { name: "User7", address: "0xB5fe7c038ba2b72022f990C7ff5EadAd231cdfb4" },
    { name: "User8", address: "0xa7C7F5b94B7cF616132149116aF91eB4B7394128" },
    { name: "User9", address: "0x51675dD808547Eef521406F901b637bF79AE8A5C" },
    { name: "User10", address: "0x8d8Da3F58Ef1Fc27B17819C9C1e6109B82306fe6" }
];

async function connectMetaMask() {
    try {
        // MetaMask quraşdırılıbmı?
        if (typeof window.ethereum !== 'undefined') {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // MetaMask-a qoşulduqdan sonra provider-i əldə et
            web3 = new Web3(window.ethereum);
            
            // Kontrakt nümunəsini yenidən yarat
            supplyChainContract = new web3.eth.Contract(abi, contractAddress);
            
            // Hesabları yenidən yüklə
            loadAccounts();
            
            return true;
        } else {
            showToast("Zəhmət olmasa MetaMask quraşdırın!", "error");
            return false;
        }
    } catch (error) {
        console.error("MetaMask qoşulması zamanı xəta:", error);
        return false;
    }
}

async function loadAccounts() {
    try {
        // Web3-ü yoxlayın
        if (!web3) {
            web3 = new Web3(ganacheUrl);
        }
        
        // Kontraktı yoxlayın və yenidən əldə edin
        if (!supplyChainContract) {
            supplyChainContract = new web3.eth.Contract(abi, contractAddress);
        }
        
        // Hesabları əldə edin
        accounts = await web3.eth.getAccounts();
        console.log("Əlçatan hesablar:", accounts);
        
        // Kontrakt admin hesabını əldə edin
        const admin = await supplyChainContract.methods.admin().call();
        console.log("Admin hesabı:", admin);
        
        // İstifadəçi sayını əldə edin
        const userCount = await supplyChainContract.methods.getUserCount().call();
        console.log("İstifadəçi sayı:", userCount);
        
        // Bütün istifadəçilərin məlumatlarını əldə edin
        usersList = [];
        accountsInfo = [];
        
        for (let i = 0; i < userCount; i++) {
            const userInfo = await supplyChainContract.methods.getUserInfo(i).call();
            const name = userInfo[0];
            const address = userInfo[1];
            const isAdmin = userInfo[2];
            const productCount = userInfo[3];
            
            usersList.push({
                name,
                address,
                isAdmin,
                productCount,
                role: isAdmin ? 'admin' : 'user'
            });
            
            if (accounts.includes(address)) {
                accountsInfo.push({
                    name,
                    address,
                    isAdmin,
                    productCount,
                    role: isAdmin ? 'admin' : 'user'
                });
            }
        }
        
        // Hesablar açılan siyahısını doldurun
        const accountDropdown = document.getElementById("account-dropdown");
        accountDropdown.innerHTML = '';
        
        accountsInfo.forEach((account, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.text = `${account.name} (${account.address.substring(0, 10)}...${account.address.substring(38)})`;
            option.title = account.address;
            if (account.isAdmin) {
                option.text += " - Admin";
            }
            accountDropdown.add(option);
        });
        
        const userTransferDropdown = document.getElementById("user-transfer-to-account");
        const adminTransferDropdown = document.getElementById("transfer-to-account");
        userTransferDropdown.innerHTML = '';
        adminTransferDropdown.innerHTML = '';
        
        usersList.forEach((user, index) => {
            // İstifadəçi üçün köçürmə hesabı seçimlərini əlavə et (özü xaric)
            if (user.role !== 'admin') {
                const option = document.createElement("option");
                option.value = index;
                option.text = `${user.name} (${user.address.substring(0, 6)}...${user.address.substring(38)})`;
                userTransferDropdown.add(option);
            }
            
            // Admin üçün köçürmə hesabı seçimlərini əlavə et
            if (user.role !== 'admin') {
                const adminOption = document.createElement("option");
                adminOption.value = index;
                adminOption.text = `${user.name} (${user.address.substring(0, 6)}...${user.address.substring(38)})`;
                adminTransferDropdown.add(adminOption);
            }
        });
        
        // Default seçim əlavə et
        if (userTransferDropdown.options.length === 0) {
            const emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.disabled = true;
            emptyOption.selected = true;
            emptyOption.text = "Göndəriləcək hesabı seçin";
            userTransferDropdown.add(emptyOption);
        }
        
        if (adminTransferDropdown.options.length === 0) {
            const emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.disabled = true;
            emptyOption.selected = true;
            emptyOption.text = "Göndəriləcək hesabı seçin";
            adminTransferDropdown.add(emptyOption);
        }
        
        // Xəta mesajını gizlət
        document.getElementById("error-message").style.display = "none";
        showToast("Hesablar uğurla yükləndi", "success");
        
        return accountsInfo;
    } catch (error) {
        console.error("Hesablar yüklənərkən xəta baş verdi: ", error);
        // Xəta mesajını göstər
        document.getElementById("error-message").style.display = "block";
        showToast("Hesablar yüklənərkən xəta baş verdi", "error");
        return [];
    }
}

async function accountSelected() {
    try {
        // Seçilmiş hesabın indeksi
        const accountIndex = document.getElementById("account-dropdown").value;
        
        // Hesab məlumatlarını yoxlayın
        const selectedAccount = accountsInfo[accountIndex];
        
        if (!selectedAccount) {
            showToast("Hesab seçilmədi, zəhmət olmasa düzgün hesab seçin.", "error");
            return;
        }
        
        console.log("Seçilmiş hesab:", selectedAccount);
        console.log("İstifadəçi rolü:", selectedAccount.role);
        
        // Admin istifadəçisinə xüsusi yanaşma
        if (selectedAccount.role === 'admin') {
            document.getElementById("admin-login-form").style.display = "block";
            document.getElementById("account-selection").style.display = "none";
            showToast("Admin giriş forması göstərilir", "info");
            return;
        }
        
        // Normal istifadəçi üçün davam et
        document.getElementById("success-message").style.display = "block";
        document.getElementById("logout-button").style.display = "block";

        document.getElementById("account-selection").style.display = "none";
        document.getElementById("main-container").style.display = "flex";
        document.getElementById("blockchain-info").style.display = "block";
        document.getElementById("warehouse-inventory").style.display = "block";

        document.getElementById("user-functions").style.display = "block";
        document.getElementById("admin-functions").style.display = "none";
        document.getElementById("activity-log").style.display = "none";
        document.getElementById("product-tracking-visualization").style.display = "block";
        
        // Blockchain məlumatlarını yüklə
        loadBlockchainInfo();
        loadInventory(false);
        
        showToast(`Hesaba uğurla daxil oldunuz: ${selectedAccount.name}`, "success");
    } catch (error) {
        console.error("Hesab seçimi zamanı xəta:", error);
        document.getElementById("error-message").style.display = "block";
        showToast("Hesab seçimi zamanı xəta baş verdi", "error");
    }
}

// Admin login funksiyası
function adminLogin() {
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;
    
    if (username === "admin" && password === "admin") {
        document.getElementById("admin-login-form").style.display = "none";
        document.getElementById("success-message").style.display = "block";
        document.getElementById("logout-button").style.display = "block";
        document.getElementById("main-container").style.display = "flex";
        document.getElementById("blockchain-info").style.display = "block";
        document.getElementById("admin-functions").style.display = "block";
        document.getElementById("user-functions").style.display = "none";
        document.getElementById("activity-log").style.display = "block";
        document.getElementById("product-tracking-visualization").style.display = "block";
        document.getElementById("warehouse-inventory").style.display = "block";
        
        loadBlockchainInfo();
        loadInventory(true);
        addLogEntry(`Admin hesabına daxil oldunuz: ${usersList[0].name}`);
        showToast("Admin kimi daxil oldunuz", "success");
    } else {
        showToast("Yanlış admin məlumatları!", "error");
        document.getElementById("admin-login-form").style.display = "none";
        document.getElementById("account-selection").style.display = "flex";
    }
}

// Admin login formu üçün ləğv funksiyası
function cancelAdminLogin() {
    document.getElementById("admin-login-form").style.display = "none";
    document.getElementById("account-selection").style.display = "flex";
}

// İstifadəçi rolunu yoxlayan yardımçı funksiya
function isAdmin(accountIndex) {
    return accountsInfo[accountIndex] && accountsInfo[accountIndex].role === 'admin';
}

// Çıxış funksiyası
function logout() {
    document.getElementById("success-message").style.display = "none";
    document.getElementById("logout-button").style.display = "none";
    document.getElementById("admin-functions").style.display = "none";
    document.getElementById("user-functions").style.display = "none";
    document.getElementById("account-selection").style.display = "flex";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("activity-log").style.display = "none";
    document.getElementById("blockchain-info").style.display = "none";
    document.getElementById("product-tracking-visualization").style.display = "none";
    document.getElementById("warehouse-inventory").style.display = "none";
    
    // Admin giriş formu sıfırla
    document.getElementById("admin-username").value = "";
    document.getElementById("admin-password").value = "";
    document.getElementById("admin-login-form").style.display = "none";
    
    showToast("Sistemdən uğurla çıxdınız", "info");
}

// Loga yeni əməliyyat əlavə etmək funksiyası
function addLogEntry(message) {
    const logEntries = document.getElementById("log-entries");
    const entry = document.createElement("div");
    entry.className = "log-entry";
    
    const timestamp = new Date().toLocaleTimeString();
    entry.innerHTML = `<span style="color: var(--primary-color); font-weight: bold;">[${timestamp}]</span> ${message}`;
    
    logEntries.insertBefore(entry, logEntries.firstChild);
}

async function userTransferProduct() {
    try {
        const productId = document.getElementById("user-product-id").value;
        const accountIndex = document.getElementById("user-transfer-to-account").value;
        const selectedAccount = accountsInfo[accountIndex].address;
        const senderAccountIndex = document.getElementById("account-dropdown").value;
        const senderAccount = accountsInfo[senderAccountIndex].address;

        // Konsolda dəyərləri yoxlayaq
        console.log("Göndərilən productId:", productId);
        console.log("Seçilmiş hesabın ünvanı (selectedAccount):", selectedAccount);
        console.log("Göndərən hesabın ünvanı (senderAccount):", senderAccount);

        // Əgər productId və selectedAccount boş və ya undefined olarsa, xəta çıxarsın
        if (!productId || !selectedAccount || !senderAccount) {
            showToast("Məhsul ID, alıcı hesabı və ya göndərən hesabı boşdur.", "error");
            return;
        }

        await supplyChainContract.methods.transferProduct(productId, selectedAccount).send({
            from: senderAccount,
            gas: 3000000
        });

        addLogEntry(`<i class="fas fa-exchange-alt"></i> İstifadəçi məhsulu göndərdi: Məhsul ID - ${productId}, Göndərən - ${senderAccount.substring(0, 6)}...${senderAccount.substring(38)}, Alıcı - ${selectedAccount.substring(0, 6)}...${selectedAccount.substring(38)}`);
        showToast("Məhsul uğurla göndərildi!", "success");
        
        // İnventarı yenilə
        loadInventory(false);
    } catch (error) {
        console.error("Məhsul göndərilərkən xəta baş verdi: ", error);
        showToast("Məhsul göndərilərkən xəta baş verdi.", "error");
    }
}

async function adminTransferProduct() {
    try {
        const productId = document.getElementById("product-id").value;
        
        // Məhsul ID-ni yoxla
        if (!productId || productId.trim() === "" || isNaN(productId)) {
            showToast("Düzgün məhsul ID daxil edilməyib.", "error");
            return;
        }
        
        const accountIndex = document.getElementById("transfer-to-account").value;
        
        // Alıcı hesabı yoxla
        if (accountIndex === undefined || accountIndex === null) {
            showToast("Zəhmət olmasa, alıcı hesabı seçin.", "error");
            return;
        }
        
        const selectedAccount = accountsInfo[accountIndex].address;
        const adminAccount = accountsInfo[0].address;
        
        console.log("Göndərilən məhsul ID:", productId);
        console.log("Göndərilən hesab:", selectedAccount);
        console.log("Admin hesabı:", adminAccount);
        
        // Bütün məhsulların siyahısını göstər (diaqnostika üçün)
        try {
            const productCounter = await supplyChainContract.methods.productCounter().call();
            console.log("Ümumi məhsul sayı:", productCounter);
            
            const generalWarehouseProduct = await supplyChainContract.methods.generalWarehouse(productId).call();
            console.log("Ümumi depodakı məhsul:", generalWarehouseProduct);
            
            if (!generalWarehouseProduct || generalWarehouseProduct.id == 0) {
                // Qeyd: Məhsul ümumi depoda deyil, ancaq olmalıdır
                console.log("Xəbərdarlıq: Məhsul ümumi depoda tapılmadı, yenidən yoxlanılır...");
                
                // Məhsulun ümumi məlumatlarını əldə etmək üçün cəhd et
                try {
                    const productDetails = await supplyChainContract.methods.getProductById(productId).call();
                    console.log("Məhsul detalları:", productDetails);
                    
                    if (productDetails && productDetails.id && productDetails.id > 0) {
                        // Məhsul tapıldı, amma ümumi depoda deyil
                        console.log("Məhsul sistemdə var, amma ümumi depoda deyil. Məhsulun sahibi:", productDetails.owner);
                        
                        // Məhsul artıq kiməsə köçürülüb?
                        const ownerInfo = usersList.find(u => u.address.toLowerCase() === productDetails.owner.toLowerCase());
                        const ownerName = ownerInfo ? ownerInfo.name : "Naməlum";
                        
                        showToast(`Bu məhsul artıq ${ownerName} (${productDetails.owner.substring(0, 6)}...${productDetails.owner.substring(38)}) istifadəçisinə köçürülüb.`, "info");
                        return;
                    }
                } catch (detailsError) {
                    console.error("Məhsul detalları alınarkən xəta:", detailsError);
                }
                
                showToast("Bu məhsul ümumi depoda mövcud deyil. Göndərilməzdən əvvəl məhsulun ümumi depoda olduğundan əmin olun.", "error");
                return;
            }
        } catch (checkError) {
            console.error("Məhsul yoxlanılan zaman xəta baş verdi:", checkError);
        }
        
        // Göndərmə əməliyyatı
        const result = await supplyChainContract.methods.transferProductFromGeneral(productId, selectedAccount).send({
            from: adminAccount,
            gas: 3000000
        });

        addLogEntry(`<i class="fas fa-truck"></i> Admin məhsulu göndərdi: Məhsul ID - ${productId}, Göndərilən hesab - ${selectedAccount.substring(0, 6)}...${selectedAccount.substring(38)}`);
        showToast("Məhsul uğurla göndərildi!", "success");
        
        // İnventarı yenilə
        loadInventory(true);
    } catch (error) {
        console.error("Məhsul göndərilərkən xəta baş verdi: ", error);
        
        // Daha detallı xəta mesajı
        let errorMessage = "Məhsul göndərilərkən xəta baş verdi.";
        
        if (error.message && error.message.includes("Depoda yoxdur")) {
            errorMessage = "Bu məhsul ümumi depoda mövcud deyil. Yalnız ümumi depodakı məhsullar göndərilə bilər.";
        } else if (error.message && error.message.includes("revert")) {
            errorMessage = "Smart kontraktda xəta: " + error.message;
        }
        
        showToast(errorMessage, "error");
    }
}

async function getProductHistory() {
    try {
        const productId = document.getElementById("history-product-id").value;

        // Məhsul ID yoxdursa xəta qaytar
        if (!productId) {
            showToast("Məhsul ID daxil edilməyib.", "error");
            return;
        }

        const history = await supplyChainContract.methods.getProductHistory(productId).call({
            from: accountsInfo[0].address,
            gas: 3000000
        });

        if (history.length > 0) {
            let historyHtml = `<i class="fas fa-history"></i> <strong>Məhsul ID ${productId} tarixçəsi:</strong><br>`;
            history.forEach((address, index) => {
                const userInfo = usersList.find(u => u.address.toLowerCase() === address.toLowerCase());
                const userName = userInfo ? userInfo.name : "Naməlum";
                historyHtml += `${index + 1}. ${userName} (${address.substring(0, 6)}...${address.substring(38)})<br>`;
            });
            addLogEntry(historyHtml);
            showToast(`Məhsul ID: ${productId} tarixçəsi uğurla əldə edildi.`, "success");
        } else {
            addLogEntry(`<i class="fas fa-exclamation-circle"></i> Məhsul ID: ${productId} üçün tarixçə tapılmadı.`);
            showToast(`Məhsul ID: ${productId} üçün tarixçə tapılmadı.`, "info");
        }
    } catch (error) {
        console.error("Məhsul tarixçəsi alınarkən xəta baş verdi: ", error);
        showToast("Məhsul tarixçəsi alınarkən xəta baş verdi.", "error");
    }
}

async function getProductDetailsById(specificProductId) {
    try {
        // Əgər specificProductId verilib, onu istifadə et, əks halda input-dan əldə et
        let productId = specificProductId;
        
        if (!productId) {
            productId = document.getElementById("details-product-id").value;
        }
        
        if (!productId || productId === '' || isNaN(productId)) {
            showToast("Düzgün məhsul ID daxil edilməyib.", "error");
            return;
        }

        // String ID-ni number-ə çevir
        productId = String(productId).trim();
        
        console.log("Məhsul ID:", productId);
        
        const product = await supplyChainContract.methods.getProductById(productId).call({
            from: accountsInfo[0].address,
            gas: 3000000
        });

        if (product && product.id && product.id > 0) {
            const ownerInfo = usersList.find(u => u.address.toLowerCase() === product.owner.toLowerCase());
            const ownerName = ownerInfo ? ownerInfo.name : "Naməlum";
            const creationDate = new Date(Number(product.creationTime) * 1000).toLocaleString();
            
            let detailsHtml = `<i class="fas fa-info-circle"></i> <strong>Məhsul detalları:</strong><br>`;
            detailsHtml += `ID: ${product.id}<br>`;
            detailsHtml += `Ad: ${product.name}<br>`;
            detailsHtml += `Tip: ${product.productType}<br>`;
            detailsHtml += `Status: ${product.status}<br>`;
            detailsHtml += `Yaradılma tarixi: ${creationDate}<br>`;
            detailsHtml += `Sahibi: ${ownerName} (${product.owner.substring(0, 6)}...${product.owner.substring(38)})<br>`;
            
            addLogEntry(detailsHtml);
            showToast(`Məhsul ID: ${productId} detalları uğurla əldə edildi.`, "success");
        } else {
            addLogEntry(`<i class="fas fa-exclamation-circle"></i> Məhsul ID: ${productId} tapılmadı.`);
            showToast(`Məhsul ID: ${productId} tapılmadı.`, "info");
        }
    } catch (error) {
        console.error("Məhsul detallarını almaqda xəta baş verdi: ", error);
        showToast("Məhsul detallarını almaqda xəta baş verdi. Düzgün məhsul ID daxil edin.", "error");
    }
}

async function addProduct() {
    try {
        const productName = document.getElementById("product-name-form").value || document.getElementById("product-name").value;
        const productType = document.getElementById("product-type").value || "Ümumi";
        const accountIndex = document.getElementById("account-dropdown").value;
        const selectedAccount = accountsInfo[accountIndex].address;

        if (!productName) {
            showToast("Zəhmət olmasa, məhsul adını daxil edin.", "error");
            return;
        }
        
        // Məhsulu əlavə et
        const result = await supplyChainContract.methods.addProductWithDetails(productName, productType).send({
            from: selectedAccount,
            gas: 3000000
        });
        
        // Qeyd: Məhsulun ID-sini və detallarını əldə et
        let newProductId = null;
        
        // Event-dən məhsul ID-ni əldə et
        if (result.events && result.events.ProductAdded) {
            newProductId = result.events.ProductAdded.returnValues.productId;
            console.log("Əlavə edilən məhsulun ID-si:", newProductId);
        }

        addLogEntry(`<i class="fas fa-plus-circle"></i> Yeni məhsul əlavə edildi: "${productName}" (${productType}) - ID: ${newProductId || 'naməlum'}`);
        showToast(`Məhsul uğurla əlavə edildi! Məhsul ID: ${newProductId || 'naməlum'}`, "success");
        
        // İnventarı yenilə
        loadInventory(true);
        
        return newProductId;
    } catch (error) {
        console.error("Məhsul əlavə olunarkən xəta baş verdi: ", error);
        showToast("Məhsul əlavə olunarkən xəta baş verdi.", "error");
        return null;
    }
}

async function viewWarehouse() {
    try {
        const accountIndex = document.getElementById("account-dropdown").value;
        const selectedAccount = accountsInfo[accountIndex].address;
        
        const warehouse = await supplyChainContract.methods.getUserWarehouse(selectedAccount).call({
            from: selectedAccount,
            gas: 3000000
        });
        
        // İnventarı yenilə
        loadInventory(accountsInfo[accountIndex].role === 'admin');
        
        if (warehouse.length > 0) {
            let warehouseHtml = `<strong>Anbarınızdakı məhsullar:</strong><br>`;
            warehouse.forEach((product, index) => {
                warehouseHtml += `${index + 1}. ID: ${product.id} - ${product.name}<br>`;
            });
            
            // Alert əvəzinə toast ilə xəbərdarlıq və log-da göstərmək
            addLogEntry(`<i class="fas fa-warehouse"></i> <strong>Anbar məzmunu:</strong><br>${warehouseHtml}`);
            showToast(`Anbarınızda ${warehouse.length} məhsul var. Jurnalda ətraflı məlumat göstərilir.`, "info");
        } else {
            showToast("Anbarınızda məhsul yoxdur.", "info");
        }
    } catch (error) {
        console.error("Anbar məlumatları alınarkən xəta baş verdi: ", error);
        showToast("Anbar məlumatları alınarkən xəta baş verdi.", "error");
    }
}

// Blockchain məlumatlarını yüklə
async function loadBlockchainInfo() {
    try {
        console.log("Blockchain məlumatları yüklənir...");
        
        // Yüklənmə indikatorunu göstər
        document.getElementById("blockchain-loading").style.display = "block";
        document.getElementById("blockchain-error").style.display = "none";
        
        // Web3 əlaqəsini yoxlayaq
        if (!web3 || !web3.eth) {
            console.error("Web3 əlaqəsi tapılmadı");
            document.getElementById("blockchain-error-message").textContent = "Web3 əlaqəsi tapılmadı. Ganache və ya MetaMask quraşdırmanızı yoxlayın.";
            document.getElementById("blockchain-error").style.display = "block";
            showTestBlockchainData();
            return;
        }
        
        // Son blok nömrəsini əldə et
        const blockNumber = await web3.eth.getBlockNumber();
        console.log("Əldə edilən blok nömrəsi:", blockNumber);
        document.getElementById("current-block").textContent = blockNumber;
        
        // Gas qiymətini əldə et
        const gasPrice = await web3.eth.getGasPrice();
        console.log("Əldə edilən gas qiyməti:", gasPrice);
        document.getElementById("gas-price").textContent = web3.utils.fromWei(gasPrice, 'gwei') + ' Gwei';
        
        // Son blok vaxtını əldə et
        const latestBlock = await web3.eth.getBlock('latest');
        console.log("Əldə edilən son blok:", latestBlock);
        
        if (latestBlock && latestBlock.timestamp) {
            const blockTime = new Date(latestBlock.timestamp * 1000).toLocaleString();
            document.getElementById("last-block-time").textContent = blockTime;
        } else {
            document.getElementById("last-block-time").textContent = "Məlumat tapılmadı";
        }
        
        console.log("Blockchain məlumatları uğurla yükləndi");
        
        // Blockchain məlumatlarının göstərilməsini əmin edək
        document.getElementById("blockchain-info").style.display = "block";
        document.getElementById("blockchain-loading").style.display = "none";
        
        // Hər 15 saniyədə məlumatları yenilə
        setTimeout(loadBlockchainInfo, 15000);
    } catch (error) {
        console.error("Blockchain məlumatları yüklənərkən xəta:", error);
        document.getElementById("blockchain-error-message").textContent = "Blockchain məlumatları yüklənərkən xəta: " + error.message;
        document.getElementById("blockchain-error").style.display = "block";
        document.getElementById("blockchain-loading").style.display = "none";
        showToast("Blockchain məlumatları yüklənərkən xəta: " + error.message, "error");
        showTestBlockchainData();
    }
}

// Əgər blockchain məlumatları əldə oluna bilməzsə test dəyərləri göstərmək üçün funksiya
function showTestBlockchainData() {
    document.getElementById("current-block").textContent = "14850223 (Test)";
    document.getElementById("gas-price").textContent = "20 Gwei (Test)";
    document.getElementById("last-block-time").textContent = new Date().toLocaleString() + " (Test)";
    document.getElementById("blockchain-info").style.display = "block";
    document.getElementById("blockchain-loading").style.display = "none";
    console.log("Test blockchain məlumatları göstərildi");
}

// Inventarı yüklə
async function loadInventory(isAdmin) {
    try {
        console.log("Anbar məlumatları yüklənir...");
        
        // Yüklənmə indikatorunu göstər
        document.getElementById("inventory-loading").style.display = "block";
        document.getElementById("inventory-error").style.display = "none";
        document.getElementById("warehouse-inventory").style.display = "block";
        
        const accountIndex = document.getElementById("account-dropdown").value;
        const selectedAccount = accountsInfo[accountIndex].address;
        
        console.log("Seçilmiş hesab:", selectedAccount);
        console.log("Admin rejimi:", isAdmin);
        
        let warehouse = [];
        
        if (isAdmin) {
            // Admin üçün bütün məhsulları göstər
            for (let i = 0; i < usersList.length; i++) {
                console.log(`${usersList[i].name} istifadəçisi üçün məhsullar yüklənir...`);
                try {
                    const result = await supplyChainContract.methods.getUserWarehouse(usersList[i].address).call({
                        from: selectedAccount
                    });
                    
                    console.log(`${usersList[i].name} istifadəçisi üçün ${result.length} məhsul tapıldı`);
                    
                    result.forEach(product => {
                        warehouse.push({
                            ...product,
                            ownerName: usersList[i].name,
                            ownerAddress: usersList[i].address
                        });
                    });
                } catch (err) {
                    console.error(`${usersList[i].name} istifadəçisinin məhsulları yüklənərkən xəta:`, err);
                }
            }
        } else {
            // İstifadəçi üçün yalnız öz məhsullarını göstər
            console.log("İstifadəçi deposundan məhsullar yüklənir...");
            try {
                const result = await supplyChainContract.methods.getUserWarehouse(selectedAccount).call({
                    from: selectedAccount
                });
                
                console.log(`İstifadəçi deposunda ${result.length} məhsul tapıldı`);
                
                result.forEach(product => {
                    warehouse.push({
                        ...product,
                        ownerName: usersList[accountIndex].name,
                        ownerAddress: selectedAccount
                    });
                });
            } catch (err) {
                console.error("İstifadəçi deposu yüklənərkən xəta:", err);
                throw err;
            }
        }
        
        // Cədvəli təmizlə
        const inventoryBody = document.getElementById("inventory-body");
        inventoryBody.innerHTML = '';
        
        console.log(`Cəmi ${warehouse.length} məhsul tapıldı`);
        
        // Hər məhsul üçün cədvəldə sətir yarat
        warehouse.forEach(product => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = product.id;
            
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            
            const ownerCell = document.createElement('td');
            ownerCell.textContent = `${product.ownerName} (${product.ownerAddress.substring(0, 6)}...${product.ownerAddress.substring(38)})`;
            
            const actionsCell = document.createElement('td');
            
            // Tarixçə düyməsi
            const historyButton = document.createElement('button');
            historyButton.innerHTML = '<i class="fas fa-history"></i>';
            historyButton.title = 'Tarixçəni göstər';
            historyButton.className = 'action-button';
            historyButton.style.marginRight = '5px';
            historyButton.onclick = function() {
                getProductDetailsById(product.id);
            };
            
            // İzləmə düyməsi
            const trackButton = document.createElement('button');
            trackButton.innerHTML = '<i class="fas fa-route"></i>';
            trackButton.title = 'Məhsulu izlə';
            trackButton.className = 'action-button';
            trackButton.onclick = function() {
                document.getElementById("visualization-product-id").value = product.id;
                visualizeProductHistory();
            };
            
            actionsCell.appendChild(historyButton);
            actionsCell.appendChild(trackButton);
            
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(ownerCell);
            row.appendChild(actionsCell);
            
            inventoryBody.appendChild(row);
        });
        
        // Məhsul yoxdursa, məlumat göstər
        if (warehouse.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.style.padding = '20px';
            cell.style.textAlign = 'center';
            cell.style.color = '#777';
            cell.textContent = 'Anbarınızda məhsul yoxdur';
            row.appendChild(cell);
            inventoryBody.appendChild(row);
        }
        
        // Yüklənmə indikatorunu gizlət
        document.getElementById("inventory-loading").style.display = "none";
        
    } catch (error) {
        console.error("İnventar yüklənərkən xəta:", error);
        document.getElementById("inventory-error-message").textContent = "Anbar məlumatları yüklənərkən xəta: " + error.message;
        document.getElementById("inventory-error").style.display = "block";
        document.getElementById("inventory-loading").style.display = "none";
        showToast("Anbar məlumatları yüklənərkən xəta baş verdi", "error");
    }
}

// Məhsul tarixçəsini vizuallaşdır
async function visualizeProductHistory() {
    try {
        const productId = document.getElementById("visualization-product-id").value;
        
        if (!productId) {
            showToast("Zəhmət olmasa məhsul ID daxil edin", "error");
            return;
        }
        
        // Məhsul haqqında məlumat əldə et
        const product = await supplyChainContract.methods.getProductById(productId).call();
        
        // Məhsul tarixçəsini əldə et
        const history = await supplyChainContract.methods.getProductHistory(productId).call();
        
        const visualizationContainer = document.getElementById("visualization-container");
        visualizationContainer.innerHTML = '';
        
        if (history.length > 0) {
            // Tarixçə vizuallaşdırmasını hazırla
            const timeline = document.createElement('div');
            timeline.className = 'timeline';
            
            // Arxa plan xətti
            const line = document.createElement('div');
            line.className = 'timeline-line';
            timeline.appendChild(line);
            
            // Hər ünvan üçün nöqtə və məlumat
            history.forEach((address, index) => {
                const userInfo = usersList.find(u => u.address.toLowerCase() === address.toLowerCase());
                const userName = userInfo ? userInfo.name : "Naməlum";
                
                const point = document.createElement('div');
                point.className = 'timeline-point';
                point.style.width = `${90 / Math.max(history.length - 1, 1)}%`;
                
                // Nöqtə
                const dot = document.createElement('div');
                dot.className = 'timeline-dot';
                dot.style.backgroundColor = index === history.length - 1 ? 'var(--success-color)' : 'var(--primary-color)';
                
                // Məlumat kartı
                const card = document.createElement('div');
                card.className = 'timeline-card';
                
                const name = document.createElement('div');
                name.style.fontWeight = 'bold';
                name.style.marginBottom = '5px';
                name.textContent = userName;
                
                const addr = document.createElement('div');
                addr.style.fontSize = '0.8em';
                addr.style.color = '#777';
                addr.textContent = `${address.substring(0, 6)}...${address.substring(38)}`;
                
                const step = document.createElement('div');
                step.style.marginTop = '5px';
                step.style.color = 'var(--primary-color)';
                step.style.fontWeight = 'bold';
                step.textContent = index === 0 ? "İstehsal" : index === history.length - 1 ? "Cari Sahib" : "Transfer " + index;
                
                card.appendChild(name);
                card.appendChild(addr);
                card.appendChild(step);
                
                point.appendChild(dot);
                point.appendChild(card);
                
                timeline.appendChild(point);
            });
            
            visualizationContainer.appendChild(timeline);
            
            // Məhsul məlumatları
            const productInfo = document.createElement('div');
            productInfo.className = 'product-info';
            
            productInfo.innerHTML = `
                <strong>Məhsul Adı:</strong> ${product.name}<br>
                <strong>Məhsul ID:</strong> ${product.id}<br>
                <strong>Cari Sahib:</strong> ${usersList.find(u => u.address.toLowerCase() === product.owner.toLowerCase())?.name || "Naməlum"}
            `;
            
            visualizationContainer.appendChild(productInfo);
            showToast(`Məhsul ID: ${productId} tarixçəsi vizuallaşdırıldı`, "success");
        } else {
            visualizationContainer.innerHTML = '<div style="text-align: center; padding: 50px 0; color: #777;">Bu məhsul üçün tarixçə məlumatı tapılmadı</div>';
            showToast(`Məhsul ID: ${productId} üçün tarixçə məlumatı tapılmadı`, "info");
        }
    } catch (error) {
        console.error("Məhsul tarixçəsi vizuallaşdırılarkən xəta:", error);
        document.getElementById("visualization-container").innerHTML = '<div style="text-align: center; padding: 50px 0; color: #e74c3c;">Xəta baş verdi. Məhsul ID düzgün deyil və ya mövcud deyil.</div>';
        showToast("Məhsul tarixçəsi vizuallaşdırılarkən xəta baş verdi", "error");
    }
}

async function updateProductStatus() {
    try {
        const productId = document.getElementById("update-product-id").value;
        const newStatus = document.getElementById("new-status").value;
        const accountIndex = document.getElementById("account-dropdown").value;
        const selectedAccount = accountsInfo[accountIndex].address;

        // Yalnız adminlər statusu yeniləyə bilər
        if (!isAdmin(accountIndex)) {
            showToast("Yalnız adminlər məhsul statusunu yeniləyə bilər.", "error");
            return;
        }

        if (!productId || !newStatus) {
            showToast("Zəhmət olmasa, məhsul ID və yeni statusu daxil edin.", "error");
            return;
        }

        await supplyChainContract.methods.updateProductStatus(productId, newStatus).send({
            from: selectedAccount,
            gas: 3000000
        });

        addLogEntry(`<i class="fas fa-edit"></i> Məhsul statusu yeniləndi: ID - ${productId}, Yeni status - ${newStatus}`);
        showToast("Məhsulun statusu uğurla yeniləndi!", "success");
        
        // İnventarı yenilə
        loadInventory(true);
        
    } catch (error) {
        console.error("Məhsul statusu yenilənərkən xəta baş verdi: ", error);
        showToast("Məhsul statusu yenilənərkən xəta baş verdi.", "error");
    }
}

// Məhsul loglarını alma funksiyasını deaktiv et
async function getProductLogs() {
    try {
        const productId = document.getElementById("logs-product-id").value;
        
        if (!productId) {
            showToast("Zəhmət olmasa, məhsul ID daxil edin.", "error");
            return;
        }
        
        const logs = await supplyChainContract.methods.getProductLogs(productId).call({
            from: accountsInfo[0].address,
            gas: 3000000
        });
        
        if (logs && logs.length > 0) {
            addLogEntry(`<i class="fas fa-clipboard-list"></i> <strong>Məhsul ID ${productId} logları:</strong><br>${logs}`);
            showToast(`Məhsul ID: ${productId} logları uğurla əldə edildi.`, "success");
        } else {
            addLogEntry(`<i class="fas fa-exclamation-circle"></i> Məhsul ID: ${productId} üçün log tapılmadı.`);
            showToast(`Məhsul ID: ${productId} üçün log tapılmadı.`, "info");
        }
    } catch (error) {
        console.error("Məhsul logları alınarkən xəta baş verdi: ", error);
        showToast("Məhsul logları alınarkən xəta baş verdi.", "error");
    }
}

// Toast bildiriş funksiyası
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    
    // Yeni toast elementini yaratmaq
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // İkon əlavə etmək
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    toast.innerHTML = `<i class="fas fa-${icon}"></i><span>${message}</span>`;
    
    // Toast-u konteynerə əlavə etmək
    toastContainer.appendChild(toast);
    
    // 5 saniyə sonra toast-u silmək
    setTimeout(() => {
        toast.style.animation = 'toast-out 0.3s forwards';
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, 5000);
}

// Ganache qoşulma və kontrakt yoxlanışı
async function checkBlockchainConnection() {
    try {
        console.log("Blockchain bağlantısı yoxlanılır...");
        
        // Web3 əlaqəsini yoxla
        if (!web3 || !web3.eth) {
            throw new Error("Web3 əlaqəsi tapılmadı");
        }
        
        // Şəbəkəyə bağlantını yoxla
        const isConnected = await web3.eth.net.isListening();
        console.log("Blockchain şəbəkəsi ilə əlaqə:", isConnected ? "Quruldu" : "Qurulmadı");
        
        if (!isConnected) {
            throw new Error("Blockchain şəbəkəsi ilə əlaqə qurulmadı");
        }
        
        // Smart kontrakta bağlantını yoxla
        if (!supplyChainContract || !supplyChainContract.methods) {
            throw new Error("Smart kontrakt əlaqəsi tapılmadı");
        }
        
        try {
            // Smart kontraktdan məlumat əldə etməyə çalış
            const adminAddress = await supplyChainContract.methods.admin().call();
            console.log("Kontrakt admin ünvanı:", adminAddress);
            
            const productCount = await supplyChainContract.methods.productCounter().call();
            console.log("Ümumi məhsul sayı:", productCount);
            
            return {
                success: true,
                adminAddress,
                productCount,
                message: "Blockchain və smart kontrakt ilə əlaqə uğurla quruldu."
            };
        } catch (contractError) {
            console.error("Smart kontrakta müraciət zamanı xəta:", contractError);
            throw new Error("Smart kontrakt mövcud deyil və ya düzgün ABI təyin edilməyib");
        }
    } catch (error) {
        console.error("Blockchain bağlantısı yoxlanılarkən xəta:", error);
        return {
            success: false,
            error: error.message,
            message: "Blockchain bağlantısında problem var: " + error.message
        };
    }
}

window.onload = async function () {
    try {
        console.log("Təchizat Zənciri tətbiqi yüklənir...");
        
        // Web3-ü inisializasiya et
        if (window.ethereum) {
            // MetaMask varsa
            web3 = new Web3(window.ethereum);
            console.log("MetaMask aşkarlandı!");
            
            try {
                // Hesablara giriş icazəsi istə
                await ethereum.request({ method: 'eth_requestAccounts' });
                console.log("Hesablara giriş icazəsi verildi");
            } catch (error) {
                if (error.code === 4001) {
                    // İstifadəçi hesablara girişi rədd etdi
                    console.log("İstifadəçi tərəfindən hesablara giriş rədd edildi");
                    showToast("Hesablara giriş rədd edildi. Zəhmət olmasa icazə verin.", "error");
                    return;
                }
                console.error("MetaMask icazəsi alınarkən xəta:", error);
            }
        } else if (window.web3) {
            // Legacy dapp brauzerlər üçün
            web3 = new Web3(window.web3.currentProvider);
            console.log("Legacy Web3 brauzeri aşkarlandı!");
        } else {
            // Fallback - Ganache
            try {
                console.log("Web3 provider aşkarlanmadı, Ganache istifadə edilir:", ganacheUrl);
                web3 = new Web3(ganacheUrl);
                
                // Ganache ilə əlaqəni yoxlayaq
                await web3.eth.net.isListening();
                console.log("Ganache ilə əlaqə uğurludur!");
            } catch (ganacheError) {
                console.error("Ganache ilə əlaqə xətası:", ganacheError);
                showToast("Ganache ilə əlaqə qurmaq mümkün olmadı. Zəhmət olmasa, Ganache-ın işlək olduğunu yoxlayın.", "error");
                document.getElementById("error-message").textContent = "Blockchain ilə əlaqə qurula bilmədi. Zəhmət olmasa, Ganache-ın işlək olduğunu yoxlayın.";
                document.getElementById("error-message").style.display = "block";
                return;
            }
            
            showToast("Web3 provider aşkarlanmadı, test rejimi aktivləşdirildi", "info");
        }
        
        try {
            // Smart kontraktı inisializasiya et
            supplyChainContract = new web3.eth.Contract(abi, contractAddress);
            console.log("Smart kontrakt ünvanı:", contractAddress);
            
            // Blockchain bağlantısını yoxla
            const blockchainStatus = await checkBlockchainConnection();
            
            if (!blockchainStatus.success) {
                showToast(blockchainStatus.message, "error");
                document.getElementById("error-message").textContent = blockchainStatus.message;
                document.getElementById("error-message").style.display = "block";
                return;
            }
            
            console.log("Smart kontrakt uğurla inisializasiya edildi!");
            console.log("Ümumi məhsul sayı:", blockchainStatus.productCount);
            showToast("Blockchain ilə bağlantı uğurlu oldu. Məhsul sayı: " + blockchainStatus.productCount, "success");
        } catch (contractError) {
            console.error("Smart kontrakt inisializasiyası zamanı xəta:", contractError);
            showToast("Smart kontrakt inisializasiyası zamanı xəta. Kontrakt ünvanını yoxlayın.", "error");
            document.getElementById("error-message").textContent = "Smart kontrakt inisializasiyası zamanı xəta. Kontrakt ünvanı düzgün olmaya bilər.";
            document.getElementById("error-message").style.display = "block";
            return;
        }
        
        // Hesabları yüklə
        const accounts = await loadAccounts();
        console.log(`${accounts.length} hesab uğurla yükləndi.`);
        
        if (accounts.length === 0) {
            showToast("Heç bir hesab tapılmadı. Zəhmət olmasa MetaMask və ya Ganache quraşdırmasını yoxlayın.", "error");
            return;
        }
        
        // Hesabları seçmə button-u
        document.getElementById("select-account").addEventListener("click", accountSelected);
        
        // Blockchain məlumatlarını göstərmək üçün test çağırışı
        loadBlockchainInfo();
        
        // Blockchain məlumatlarını yenidən yükləmək üçün düymə hadisəsi
        document.getElementById("retry-blockchain").addEventListener("click", function() {
            showToast("Blockchain məlumatları yenidən yüklənir...", "info");
            loadBlockchainInfo();
        });
        
        // Anbar məlumatlarını yenidən yükləmək üçün düymə hadisəsi
        document.getElementById("retry-inventory").addEventListener("click", function() {
            showToast("Anbar məlumatları yenidən yüklənir...", "info");
            const accountIndex = document.getElementById("account-dropdown").value;
            const isAdmin = accountsInfo[accountIndex].role === 'admin';
            loadInventory(isAdmin);
        });
        
        showToast("Sistem uğurla yükləndi", "success");
    } catch (error) {
        console.error("Blockchain inisializasiyası zamanı xəta baş verdi:", error);
        showToast("Blockchain inisializasiyası zamanı xəta baş verdi", "error");
        
        // Xəta mesajını göstər
        document.getElementById("error-message").textContent = "Blockchain inisializasiyası zamanı xəta baş verdi: " + error.message;
        document.getElementById("error-message").style.display = "block";
    }
}; 