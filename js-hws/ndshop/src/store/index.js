import { createStore } from 'vuex'

export default createStore({
  state: {
    
    shop: [],
    count:0,
    numberRow:[],
    totalSum:0,
    

    users: [
      {name: "Evgeniy", password: "123456"},
      {name: "Anna", password: "123456"},
      {name: "Irina", password: "123456"}
    ],

      products: [
          {name: '11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный',
              img: 'acer.png',
              price: 14000,
              img_slider: [
                  {img:'acer.png', id: 1},
                  {img:'aser2.png', id: 2},
                  {img:'aser3.png', id: 3}
              ],
              description: 'С ноутбуком Acer TravelMate B1 TMB118-M-C0EA любая дорога будет веселей и ярче. Ведь с ним не придется скучать. На 11.6-дюймовой диагонали дисплея типа TN+film с HD-разрешением 1366x768 пикселей вы сможете сполна наслаждаться мобильным просмотром видеотреков и фильмов. А матовое покрытие при этом минимизирует возможные блики. Производительный процессор N4120 линейки Celeron с 4 ядрами в активе и частотным диапазоном от 1.1 до 2.6 МГц позволит без проблем и задержек загружать самые разные по объему приложения. А стереодинамики позволят получать удовольствие от любимых аудиотреков.',
              category: 'desktop',
              id: 1,
              cart: false},
          {name: '15.6" Ноутбук Dell Inspiron 3583-8512 черный',
              img: 'dell.png',
              price: 34000,
              img_slider: [
                  {img:'dell.png', id: 1},
                  {img:'dell2.png', id: 2},
                  {img:'dell3.png', id: 3}
              ],
              description: 'Ноутбук Dell Inspiron 3501-8182 подойдет для мобильных сотрудников, которым требуется тонкий, легкий и прочный ноутбук с передовыми средствами безопасности для повседневных задач. Наслаждайтесь увеличенной полезной площадью экрана за счет двусторонней узкой рамки, которая обеспечивает широкий обзор. Элегантный дисплей с узкой рамкой, разрешением Full HD и антибликовым покрытием обеспечивает четкое, яркое изображение, приятное для просмотра. Подключите телевизор или монитор через порт HDMI, скачивайте фотографии с помощью слота для карты SD и наслаждайтесь высокой скоростью передачи со всех ваших аксессуаров благодаря двум портам USB 3.2 Gen 1.',
              category: 'desktop',
              id: 2,
              cart: false},
          {name: '15.6" Ультрабук HP Pavilion 15-eg0006ur синий',
              img: 'hp.png',
              price: 60000,
              img_slider: [
                  {img:'hp.png', id: 1},
                  {img:'ph2.png', id: 2},
                  {img:'hp3.png', id: 3}
              ],
              description: 'Этот ноутбук отличается компактными размерами и невероятной производительностью, что позволяет работать эффективнее и получать больше удовольствия от развлечений, сохраняя полную свободу передвижения. Получайте гораздо больше удовольствия от развлечений благодаря экрану с узкими рамками и аудиосистеме B&O.',
              category: 'desktop',
              id: 3,
              cart: false},
          {name: '5.4" Смартфон Apple iPhone 12 Mini 256 ГБ зеленый',
              img: 'iphone.png',
              price: 84000,
              img_slider: [
                  {img:'iphone.png', id: 1},
                  {img:'iphone2.png', id: 2},
                  {img:'iphone3.png', id: 3}
              ],
              description: 'Это iPhone 12 mini. Мощные функции в небольшом корпусе с диагональю 5,4 дюйма. Невероятно яркий компактный дисплей Super Retina XDR. Передняя панель Ceramic Shield, с которой риск повреждений дисплея при падении в 4 раза ниже. Потрясающее качество снимков при слабом освещении благодаря Ночному режиму на всех камерах. Съёмка, монтаж и воспроизведение HDR-видео кинематографического качества в стандарте Dolby Vision. Мощный процессор A14 Bionic. И аксессуары MagSafe, которые мгновенно примагничиваются и обеспечивают более быструю беспроводную зарядку. Это миниатюрный смартфон с очень большим потенциалом.',
              category: 'phone',
              id: 4,
              cart: false},
          {name: '5.3" Смартфон Samsung Galaxy A01 Core 16 ГБ красный',
              img: 'samsung.png',
              price: 5000,
              img_slider: [
                  {img:'samsung.png', id: 1},
                  {img:'samsung2.png', id: 2},
                  {img:'samsung3.png', id: 3}
              ],
              description: 'Смартфон Samsung Galaxy A01 Core сочетает эффектное цветовое исполнение, высокий уровень производительности и широкие функциональные возможности. Аппаратная платформа с процессором MediaTek и 1 ГБ оперативной памяти обеспечивают быструю работу приложений, веб-страниц, мультимедиа. Под хранение данных пользователя выделено 16 ГБ памяти.',
              category: 'phone',
              id: 5,
              cart: false},
          {name: '6.53" Смартфон Xiaomi Redmi 9C NFC 64 ГБ оранжевый',
              img: 'xiaomi.png',
              price: 10000,
              img_slider: [
                  {img:'xiaomi.png', id: 1},
                  {img:'xiaomi2.png', id: 2},
                  {img:'xiaomi3.png', id: 3}
              ],
              description: 'Смартфон Xiaomi Redmi 9C NFC в привлекательном оранжевом корпусе из пластика порадует будущего владельца самым прогрессивным функционалом. IPS-экран модели при диагонали 6.53 дюйма обладает разрешением 1600x720 пикселей и способен отображать свыше 16 млн оттенков. Восьмиядерный процессор и 3 ГБ оперативной памяти позволяют модели быть колоссально быстродейственной и радовать своего владельца работой в десятках приложений одновременно. Модули Google Pay и NFC отвечают за возможность бесконтактной оплаты.',
              category: 'phone',
              id: 6,
              cart: false},
          {name: '10.4" Планшет Honor Pad V6 128 ГБ черный',
              img: 'honor.png',
              price: 27000,
              img_slider: [
                  {img:'honor.png', id: 1},
                  {img:'honor2.png', id: 2},
                  {img:'honor3.png', id: 3}
              ],
              description: 'Планшет Honor Pad V6 выполнен в прочном корпусе с металлической задней панелью. На 10.4-дюймовом дисплее IPS с разрешением 2000x1200 пикселей отображается детализированное изображение с насыщенными цветами и глубокими оттенками. Аппаратная платформа во главе с процессором HiSilicon Kirin 985 обеспечивает высокий уровень производительности и скорости. Помогают ему в этом 6 ГБ оперативной памяти и графический ускоритель Mali-G77. Данная модель Honor Pad V6 предусматривает 128 ГБ памяти под размещение различного контента. Имеется слот для установки карты памяти. На тыловой панели размещен модуль 13-Мп камеры, а спереди установлена дополнительная камера 8 Мп для качественного общения по видеосвязи. Мощный аккумулятор на 7250 мА*ч способен обеспечить около 13 часов работы без подзарядки в режиме просмотра видео.',
              category: 'tab',
              id: 7,
              cart: false},
          {name: '10.8" Планшет Huawei Matepad Pro 256 ГБ 3G, LTE серый +стилус',
              img: 'huawei.png',
              price: 48000,
              img_slider: [
                  {img:'huawei.png', id: 1},
                  {img:'huawei2.png', id: 2},
                  {img:'huawei3.png', id: 3}
              ],
              description: 'Планшет Huawei Matepad Pro создан для самых требовательных пользователей и творческих личностей. Он выполнен в тонком и надежном металлическом корпусе. В планшетном компьютере установлена 10.8-дюймовая матрица IPS с разрешающей способностью 2560x1600 пикселей, которая позволяет наслаждаться реалистичным изображением с качественной цветопередачей независимо от положения. Поддержка технологии мультитач гарантирует интуитивное управление касаниями и жестами с быстрой отзывчивостью. Также планшет позволяет воплощать различные идеи с помощью стилуса. Аппаратная начинка с процессором HiSilicon Kirin 990, графическим ядром Mali-G76 и 8 ГБ ОЗУ обеспечивает высокий уровень производительности и быстродействия даже при выполнении нескольких задач одновременно. На задней панели имеется камера с разрешением 13 Мп, а для общения по видеосвязи и селфи предусмотрена камера на 8 Мп. Huawei Matepad Pro оборудован модулем 3G и востребованными беспроводными коммуникациями. Аккумулятор емкостью 7250 мА*ч гарантирует до 40 часов работы в режиме разговора 3G.',
              category: 'tab',
              id: 8,
              cart: false},
          {name: '10.1" Планшет Lenovo TAB M10 HD TB-X306X 32 ГБ 3G, LTE серебристый',
              img: 'lenovo.png',
              price: 27000,
              img_slider: [
                  {img:'lenovo.png', id: 1},
                  {img:'lenovo2.png', id: 2},
                  {img:'lenovo3.png', id: 3}
              ],
              description: 'Планшет Lenovo TAB M10 HD TB-X306X серебристого цвета имеет тонкий металлический корпус, устойчивый к образованию сколов, трещин и других повреждений. Модель проста в использовании и подходит для общения и выполнения рабочих задач. Емкостный мультитач-экран моментально реагирует на прикосновения. Устройство поддерживает высокоскоростной Wi-Fi и обеспечивает передачу данных между другими устройствами посредством Bluetooth версии 5.0.Планшет Lenovo TAB M10 HD TB-X306X оснащен мощным процессором с 8 ядрами, что позволяет загружать энергоемкие программы и приложения без потери производительности. Внутренняя память составляет 32 ГБ, в случае необходимости можно увеличить хранилище на 1 ТБ с помощью карты microCD. Для съемки видео или фото есть фронтальная и тыловая камеры. Мощный аккумулятор обеспечивает работу в течение 8 ч без перерыва.',
              category: 'tab',
              id: 9,
              cart: false},

      ]
  },
  mutations: {
    addToCart(state, {product}){
      if(state.shop.find(item => item.id === product.id)){
        product.quantity ++;
        product.totalprice = product.price * product.quantity;
      }else{
        state.shop.push(product);
        product.quantity = 1;
        product.totalprice = product.price;
      }
      state.count ++;
      state.totalSum = state.totalSum + product.price;

    },

    getLess(state, {product}){
      let index = state.shop.indexOf(product);
      if(index>-1){
          if(state.shop[index].quantity === 0){
            state.shop.splice(index, 1);
            state.count -= 1;
          } else{
            state.shop[index].quantity -= 1;
            state.shop[index].totalprice = state.shop[index].price * state.shop[index].quantity;
            state.totalSum -= state.shop[index].price;
            state.count -= 1;
          }
        
      }
    },

    getMore(state, {product}){
      let index = state.shop.indexOf(product);
      if(index>-1){
          state.shop[index].quantity += 1;
          state.totalSum -= state.shop[index].totalprice;
          state.shop[index].totalprice = state.shop[index].price * state.shop[index].quantity;
          state.totalSum += state.shop[index].totalprice;
          state.count += 1;
      }
    },

    removeFromShop(state, {product}) {
      let index = state.cart.indexOf(product);
      if (index > -1) {
          let good = state.cart[index];
          state.count -= good.quantity;
          state.shop.splice(index, 1);
      }
  },

    getTotalSum(state){
      for(let item of state.shop){
        state.totalSum += item.totalprice;
      }
      return state.totalSum;
    }
  },
  getters: {
    getComputers(state){
      return state.products.filter(product => product.category == 'desktop')
    },
    getTabs(state){
      return state.products.filter(product => product.category == 'tab')
    },
    getPhones(state){
      return state.products.filter(product => product.category == 'phone')
    },
    getCardById: state => (id) => {
      return state.products.filter(product => product.id == id)[0];
    },
      getUsers(state){
          return state.users;
      }
  }
})