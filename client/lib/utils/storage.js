




const {
  localStorage:storage,
  JSON:{stringify:serialize, parse: deserialize}
}=globalThis







// saveStoreage('name','tiger')
// loadStoreage('name')
// deleteStoreage('name')





storage.setItem('name','tiger');
console.log(storage.getItem('name'));

// 제거하는거
// storage.removeItem('name');

// 한방에 날아가는거
storage.clear()