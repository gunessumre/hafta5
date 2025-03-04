// Menü öğelerini tanımlıyoruz
const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.`,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img: "https://i.pinimg.com/736x/91/c9/4d/91c94d27874231545ef8a153bb374476.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yaprak sarma",
      category: "China",
      price: 156476364560,
      img: "https://i.pinimg.com/736x/c9/82/b8/c982b8e733086d6ffb1dd4010816ab91.jpg",
      desc: `Bir antepli olarak bunun burda olmasi lazimdi `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img: "https://i.pinimg.com/736x/05/fa/83/05fa8366c4fecf13a1aa12712471aad4.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img: "https://i.pinimg.com/236x/1c/6c/f4/1c6cf481b90685e9e09242af30a97f4b.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  // Sayfa yüklendiğinde çalışacak fonksiyon
  document.addEventListener("DOMContentLoaded", function() {
    // Menü öğelerinin gösterileceği bölümü seçiyoruz
    const sectionCenter = document.querySelector(".section-center");
    // Butonların gösterileceği bölümü seçiyoruz
    const btnContainer = document.querySelector(".btn-container");
    
    // Butonları oluştur
    createButtons();
    
    // Tüm menüyü göster
    displayMenuItems(menu);
    
    // Butonları oluşturan fonksiyon
    function createButtons() {
      // Önce kategorileri almak için menü dizisini reduce ile işliyoruz
      const categories = menu.reduce(
        function(values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["All"] // İlk değer olarak "All" kategorisini ekliyoruz
      );
      
      // Kategorilere göre butonları oluşturuyoruz
      const categoryBtns = categories.map(function(category) {
        return `<button class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
      }).join("");
      
      // Butonları HTML'e ekliyoruz
      btnContainer.innerHTML = categoryBtns;
      
      // Butonlara tıklama olayı ekliyoruz
      const filterBtns = document.querySelectorAll(".btn-item");
      
      filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
          const category = e.currentTarget.dataset.id;
          
          // İlgili kategoriye göre menüyü filtreliyoruz
          const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          
          // Eğer "All" seçildiyse tüm menüyü, değilse filtrelenmiş menüyü gösteriyoruz
          if (category === "All") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
    }
    
    // Menü öğelerini gösteren fonksiyon
    function displayMenuItems(menuItems) {
      // map metodu ile her menü öğesi için HTML oluşturup birleştiriyoruz
      let displayMenu = menuItems.map(function(item) {
        return `
          <div class="menu-items col-lg-6 col-sm-12">
            <img src="${item.img}" alt="${item.title}" class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
        `;
      }).join("");
      
      // Oluşturulan HTML'i sayfaya ekliyoruz
      sectionCenter.innerHTML = displayMenu;
    }
  });