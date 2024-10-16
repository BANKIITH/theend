// ตัวอย่างสินค้าในตะกร้า
let cart = [
    {
      name: "Warhammer 40,000: Space Marine 2",
      price: 1490,
      quantity: 1,
      image: "path_to_image.jpg"
    },
    {
      name: "Black Myth: Wukong",
      price: 1799,
      quantity: 1,
      image: "path_to_image.jpg"
    }
  ];
  
  // ฟังก์ชันแสดง Pop-up ตะกร้าสินค้า
  function showCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // ล้างข้อมูลเก่า
  
    // สร้างรายการสินค้า
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <p>${item.name}</p>
          <p>THB ${item.price}</p>
        </div>
        <div class="item-controls">
          <button onclick="updateQuantity(${index}, 'decrease')">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 'increase')">+</button>
        </div>
      `;
      cartItems.appendChild(li);
    });
  
    // แสดง Pop-up
    cartPopup.style.display = 'block';
  }
  
  // ฟังก์ชันเพิ่ม/ลดจำนวนสินค้า
  function updateQuantity(index, action) {
    if (action === 'increase') {
      cart[index].quantity++;
    } else if (action === 'decrease' && cart[index].quantity > 1) {
      cart[index].quantity--;
    }
    showCartPopup(); // อัพเดต Pop-up
  }
  
  // ฟังก์ชันปิด Pop-up
  function hideCartPopup() {
    document.getElementById('cart-popup').style.display = 'none';
  }
  
  // ตัวอย่างการเรียกแสดง Pop-up
  document.getElementById('cart-button').addEventListener('click', showCartPopup);
  