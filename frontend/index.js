const Web3 = require('web3');

// Ganache bağlantı konfiqurasiyası
const ganacheUrl = 'http://127.0.0.1:7545';
const web3 = new Web3(ganacheUrl);

// Smart kontrakt məlumatları
const contractAddress = '0x0Df76E0Ab551299990Be58bF9E13b048666c4263';
const abi = [
  // ABI buraya əlavə ediləcək - SupplyChain kontraktının interfeysi
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

let supplyChainContract;
let accounts = [];

// Web3 bağlantısını yoxla və kontraktı inisializasiya et
async function initializeBlockchain() {
    try {
        // Əlçatan hesabları əldə et
        accounts = await web3.eth.getAccounts();
        console.log('Əlçatan hesablar:', accounts);

        // Kontraktı inisializasiya et
        supplyChainContract = new web3.eth.Contract(abi, contractAddress);
        console.log('Kontrakt uğurla inisializasiya edildi');

        return {
            success: true,
            accounts,
            contract: supplyChainContract
        };
    } catch (error) {
        console.error('Blockchain inisializasiyası zamanı xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Hesab balansını yoxla
async function checkBalance(address) {
    try {
        const balance = await web3.eth.getBalance(address);
        return {
            address,
            balance: web3.utils.fromWei(balance, 'ether'),
            weiBalance: balance
        };
    } catch (error) {
        console.error(`${address} ünvanının balansı yoxlanılarkən xəta:`, error);
        return {
            address,
            error: error.message
        };
    }
}

// Məhsulun əlavə edilməsi funksiyası
async function addProduct(name, fromAddress) {
    try {
        const result = await supplyChainContract.methods.addProductToGeneralWarehouse(name).send({
            from: fromAddress,
            gas: 3000000
        });
        
        return {
            success: true,
            transactionHash: result.transactionHash,
            events: result.events
        };
    } catch (error) {
        console.error('Məhsul əlavə edilərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Məhsulun ötürülməsi funksiyası
async function transferProduct(productId, toAddress, fromAddress) {
    try {
        const result = await supplyChainContract.methods.transferProduct(productId, toAddress).send({
            from: fromAddress,
            gas: 3000000
        });
        
        return {
            success: true,
            transactionHash: result.transactionHash,
            events: result.events
        };
    } catch (error) {
        console.error('Məhsul ötürülərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Admin tərəfindən məhsulun ötürülməsi funksiyası
async function transferProductFromGeneral(productId, toAddress, adminAddress) {
    try {
        const result = await supplyChainContract.methods.transferProductFromGeneral(productId, toAddress).send({
            from: adminAddress,
            gas: 3000000
        });
        
        return {
            success: true,
            transactionHash: result.transactionHash,
            events: result.events
        };
    } catch (error) {
        console.error('Admin məhsul ötürülərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Məhsul tarixçəsini əldə etmək
async function getProductHistory(productId, fromAddress) {
    try {
        const history = await supplyChainContract.methods.getProductHistory(productId).call({
            from: fromAddress
        });
        
        return {
            success: true,
            history
        };
    } catch (error) {
        console.error('Məhsul tarixçəsi əldə edilərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// İstifadəçinin anbarındakı məhsulları əldə etmək
async function getUserWarehouse(userAddress, callerAddress) {
    try {
        const warehouse = await supplyChainContract.methods.getUserWarehouse(userAddress).call({
            from: callerAddress
        });
        
        return {
            success: true,
            warehouse
        };
    } catch (error) {
        console.error('İstifadəçi anbarı əldə edilərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Gas qiymətini əldə etmək
async function getGasPrice() {
    try {
        const gasPrice = await web3.eth.getGasPrice();
        return {
            success: true,
            gasPrice: web3.utils.fromWei(gasPrice, 'gwei') + ' Gwei'
        };
    } catch (error) {
        console.error('Gas qiyməti əldə edilərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Blockchain statistikasını əldə etmək
async function getBlockchainStats() {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        const latestBlock = await web3.eth.getBlock('latest');
        
        return {
            success: true,
            blockNumber,
            latestBlockHash: latestBlock.hash,
            latestBlockTimestamp: new Date(latestBlock.timestamp * 1000).toLocaleString(),
            gasLimit: latestBlock.gasLimit,
            gasUsed: latestBlock.gasUsed,
            difficulty: latestBlock.difficulty
        };
    } catch (error) {
        console.error('Blockchain statistikası əldə edilərkən xəta:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Əsas funksiya - modulun başlanğıcında işə düşür
async function main() {
    const blockchainConnection = await initializeBlockchain();
    
    if (blockchainConnection.success) {
        console.log('Blockchain ilə bağlantı uğurla quruldu');
        console.log(`${accounts.length} hesab əldə edildi`);
        
        // Əlçatan hesabların balanslarını göstər
        for (let i = 0; i < Math.min(accounts.length, 5); i++) {
            const balanceInfo = await checkBalance(accounts[i]);
            console.log(`Hesab ${i+1}: ${accounts[i]} - Balans: ${balanceInfo.balance} ETH`);
        }
        
        // Blockchain statistikasını göstər
        const stats = await getBlockchainStats();
        if (stats.success) {
            console.log('Blockchain Statistikası:');
            console.log(`- Cari blok nömrəsi: ${stats.blockNumber}`);
            console.log(`- Son blok vaxtı: ${stats.latestBlockTimestamp}`);
        }
        
        // Gas qiymətini göstər
        const gasPriceInfo = await getGasPrice();
        if (gasPriceInfo.success) {
            console.log(`- Cari gas qiyməti: ${gasPriceInfo.gasPrice}`);
        }
    } else {
        console.error('Blockchain ilə bağlantı qurularkən xəta baş verdi:', blockchainConnection.error);
    }
}

// Proqramı işə sal
main().catch(error => {
    console.error('Proqram icra olunarkən xəta baş verdi:', error);
});

// Export modulları
module.exports = {
    initializeBlockchain,
    checkBalance,
    addProduct,
    transferProduct,
    transferProductFromGeneral,
    getProductHistory,
    getUserWarehouse,
    getGasPrice,
    getBlockchainStats
};
