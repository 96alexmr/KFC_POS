const categories = [
    {
      name: "Revolvers",
      image: "items/revolvers/navyrevolver1851.png",
      products: [
        { name: "Navy Revolver 1851", companyCost: 300.00, customerCost: 449.99, salesRepProfit: 75.00, image: "items/revolvers/navyrevolver1851.png" },
        { name: "Schofield Smith & Wesson No. 3", companyCost: 400.00, customerCost: 599.99, salesRepProfit: 100.00, image: "items/revolvers/schofieldno3.png" },
        { name: "Cattleman M1873 Revolver", companyCost: 1000.00, customerCost: 1499.99, salesRepProfit: 250.00, image: "items/revolvers/cattleman.png" },
        { name: "Double-Action Revolver", companyCost: 350.00, customerCost: 499.99, salesRepProfit: 75.00, image: "items/revolvers/doubleaction.png" },
        { name: "Lemat Revolver", companyCost: 250.00, customerCost: 349.99, salesRepProfit: 50.00, image: "items/revolvers/lemat.png" }
      ]
    },
    {
        name: "Pistols",
        image: "items/pistols/volcanic.png",
        products: [
          { name: "Volcanic Pistol", companyCost: 10.00, customerCost: 15.99, salesRepProfit: 2.50, image: "items/pistols/volcanic.png" },
          { name: "M1899", companyCost: 12.50, customerCost: 18.99, salesRepProfit: 3.00, image: "items/pistols/m1899.png" },
          { name: "Mauser Pistol", companyCost: 15.00, customerCost: 21.99, salesRepProfit: 3.50, image: "items/pistols/mauser.png" },
          { name: "Semi-Auto Pistol", companyCost: 18.00, customerCost: 24.99, salesRepProfit: 3.75, image: "items/pistols/semiauto.png" },
        ]
      },
    {
      name: "Rifles",
      image: "items/rifles/varmint.png",
      products: [
        { name: "Varmint Rifle", companyCost: 700.00, customerCost: 999.99, salesRepProfit: 150.00, image: "items/rifles/varmint.png" },
        { name: "Springfield 1873", companyCost: 600.00, customerCost: 899.99, salesRepProfit: 150.00, image: "items/rifles/springfield.png" },
        { name: "Bolt-Action Rifle", companyCost: 800.00, customerCost: 1199.99, salesRepProfit: 200.00, image: "items/rifles/boltaction.png" },
      ]
    },
    {
      name: "Shotguns",
      image: "items/shotguns/doublebarrel.png",
      products: [
        { name: "Double Barrell", companyCost: 300.00, customerCost: 449.99, salesRepProfit: 75.00, image: "items/shotguns/doublebarrel.png" },
      ]
    },
    {
        name: "Ammo",
        image: "items/ammo/pistol.png",
        products: [
          { name: "Pistol Ammo", companyCost: 10.00, customerCost: 15.99, salesRepProfit: 2.50, image: "items/ammo/pistol.png" },
          { name: "Revolver Ammo", companyCost: 12.50, customerCost: 18.99, salesRepProfit: 3.00, image: "items/ammo/revolver.png" },
          { name: "Rifle Ammo", companyCost: 15.00, customerCost: 21.99, salesRepProfit: 3.50, image: "items/ammo/rifle.png" },
          { name: "Shotgun Ammo", companyCost: 18.00, customerCost: 24.99, salesRepProfit: 3.75, image: "items/ammo/shotgun.png" },
          { name: "Repeater Ammo", companyCost: 8.00, customerCost: 12.99, salesRepProfit: 2.00, image: "items/ammo/repeater.png" }
        ]
      },
    {
      name: "Materials",
      image: "items/materials/gold.png",
      products: [
        { name: "Gold", companyCost: 20.00, customerCost: 29.99, salesRepProfit: 5.00, image: "items/materials/gold.png" },
        { name: "Silver", companyCost: 15.00, customerCost: 24.99, salesRepProfit: 5.00, image: "..." },
        { name: "Steel", companyCost: 25.00, customerCost: 34.99, salesRepProfit: 5.00, image: "..." },
        { name: "Leather", companyCost: 10.00, customerCost: 19.99, salesRepProfit: 5.00, image: "..." },
      ]
    },
    {
      name: "Extras",
      image: "items/extras/gunoil.png",
      products: [
        { name: "Gun Oil", companyCost: 25.00, customerCost: 39.99, salesRepProfit: 7.50, image: "items/extras/gunoil.png" },
      ]
    }
  ];
  
  let currentCategory = null;
  let total = 0;
  let employeeProfit = 0;
  
  function renderCategories() {
    const categoriesDiv = document.getElementById("categories");
    categoriesDiv.innerHTML = "";
    categories.forEach(category => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category-item";
      categoryDiv.innerHTML = `
        <img src="${category.image}" alt="${category.name}">
        <p>${category.name}</p>
      `;
      categoryDiv.addEventListener("click", () => showProducts(category));
      categoriesDiv.appendChild(categoryDiv);
    });
  }
  
  function showProducts(category) {
    currentCategory = category;
    const productsDiv = document.getElementById("products");
    const productItemsDiv = document.getElementById("product-items");
    productsDiv.style.display = "flex";
    productItemsDiv.innerHTML = "";
    category.products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product-item";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
      `;
      productDiv.addEventListener("click", () => addToReceipt(product));
      productItemsDiv.appendChild(productDiv);
    });
    document.getElementById("categories").style.display = "none";
  }
  
  function addToReceipt(product) {
    const receiptDiv = document.getElementById("receipt");
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${product.name} - $${product.customerCost.toFixed(2)}`;
    receiptDiv.appendChild(itemDiv);
    total += product.customerCost;
    employeeProfit += product.salesRepProfit;
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("employee-profit").textContent = employeeProfit.toFixed(2);
  }
  
  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", () => {
    const productsDiv = document.getElementById("products");
    productsDiv.style.display = "none";
    document.getElementById("categories").style.display = "grid";
    currentCategory = null;
  });
  const newReceiptBtn = document.getElementById("new-receipt-btn");
newReceiptBtn.addEventListener("click", startNewReceipt);

function startNewReceipt() {
  // Clear the receipt
  const receiptDiv = document.getElementById("receipt");
  receiptDiv.innerHTML = "";

  // Reset the total and employee profit
  total = 0;
  employeeProfit = 0;
  document.getElementById("total").textContent = "0.00";
  document.getElementById("employee-profit").textContent = "0.00";

  // Hide the products section and show the categories section
  const productsDiv = document.getElementById("products");
  productsDiv.style.display = "none";
  document.getElementById("categories").style.display = "grid";
  currentCategory = null;
}
const copyReceiptBtn = document.getElementById("copy-receipt-btn");
copyReceiptBtn.addEventListener("click", copyReceipt);

function copyReceipt() {
  const receiptItems = document.getElementById("receipt").innerText;
  const formattedReceipt = `Kamassa Firearm Company\n\n${receiptItems}\n\nTotal: $${total.toFixed(2)}`;

  navigator.clipboard.writeText(formattedReceipt)
    .then(() => {
      alert("Receipt copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy receipt:", error);
    });
}
  renderCategories();