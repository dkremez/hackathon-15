Address.delete_all
Discount.delete_all
Category.delete_all

# Categories
Category.create name: 'Бары и пабы'
Category.create name: 'Туризм'
Category.create name: 'Курсы иностранных языков'

# Discounts
Category.where(name: 'Бары и пабы').first.discounts.create title: 'Bar 13', description: 'Bar 13 - необычная смесь барного и клубного формата в центре Минска. Изысканная авторская кухня, качественная музыка и особая атмосфера.', discount: '-13%', link: 'http://bar13.relax.by/'
Category.where(name: 'Бары и пабы').first.discounts.create title: 'The Pub', description: '«The Pub» - место, которое умеет развеивать мифы. Один из самых необычных пабов города на улице К. Маркса удивляет фестивальным меню различных стран.', discount: '-15%', link: 'http://the-pub.relax.by/'
Category.where(name: 'Бары и пабы').first.discounts.create title: 'BEERжа', description: 'Лучшие традиции особенного пива. Меню паба составлено и выглядит не совсем обычно: создается ощущение, что попадаешь на настоящую фондовую биржу:)', discount: '-15%', link: 'http://berzha-1.relax.by/'
Category.where(name: 'Бары и пабы').first.discounts.create title: 'BierKeller', description: '«BierKeller» - это уютный уголок Германии с традиционным интерьером и аутентичными элементами.', discount: '-10%', link: 'http://bierkeller.relax.by/'
Category.where(name: 'Бары и пабы').first.discounts.create title: 'Гамбринус', description: 'Гастро-паб с особой историей и традициями плзеньского, кельтского, бельгийского и датского пивоварения.', discount: '-10%', link: 'http://gambrinus.relax.by/'
Category.where(name: 'Бары и пабы').first.discounts.create title: 'Староместный пивовар', description: 'Отменное пиво собственного производства на одной из пешеходных улиц Старого города в здании с двухвековой историей.', discount: '-15%', link: 'http://st-pivovar-2.relax.by/'
Category.where(name: 'Туризм').first.discounts.create title: 'Первая туристическая компания', description: 'В агентстве помогут определиться и выбрать тур, который подходит именно вам (Турция, Египет, Испания, Болгария и др. страны).', discount: '-5%', link: 'http://www.ptk.by/'
Category.where(name: 'Туризм').first.discounts.create title: 'МалибуТрэвел', description: 'Классические предложения по пляжному отдыху в европейских и экзотических странах, а также экскурсионные автобусные туры.', discount: '3-7%', link: 'http://malibu.by/'
Category.where(name: 'Туризм').first.discounts.create title: 'GoldTravel', description: 'Туристическая компания GOLD TRAVEL предлагает отдых по всему миру, горящие туры, экскурсии, визы и приглашения.', discount: '-7%', link: 'http://goldtravel.by/'
Category.where(name: 'Туризм').first.discounts.create title: 'Топ Тур', description: 'ТОП-ТУР предлагает отдых по основным направлениям, а также рад помочь организовать путешествие в любую точку Мира.', discount: '-5%', link: 'http://www.toptour.by/'
Category.where(name: 'Туризм').first.discounts.create title: 'Tez tour', description: 'Tez tour радует свежими путевками в самые теплые и экзотические уголки мира. Индивидуальные и экскурсионные туры.', discount: '5-7%', link: 'http://riviera-t.by/'
Category.where(name: 'Курсы иностранных языков').first.discounts.create title: 'Streamline', description: 'В Streamline преподается восемь языков в соответствии с международными стандартами качества и с использованием самых современных технологий обучения.', discount: 'до 25%', link: 'http://www.str.by/'

# Discounts addresses
Discount.where(title: 'Bar 13').first.addresses.create(address: 'г. Минск, ул. Красная, 13')
Discount.where(title: 'The Pub').first.addresses.create(address: 'г. Минск, ул. К. Маркса, 6')
Discount.where(title: 'BEERжа').first.addresses.create(address: 'г. Минск, ул. Толстого, 10')
Discount.where(title: 'BEERжа').first.addresses.create(address: 'г. Минск, пр-т Независимости, 40')
Discount.where(title: 'BEERжа').first.addresses.create(address: 'г. Минск, ул. Нарочанская, 6')
Discount.where(title: 'BierKeller').first.addresses.create(address: 'г. Минск, пер. Войсковой, 12')
Discount.where(title: 'Гамбринус').first.addresses.create(address: 'г. Минск, пл. Свободы, 2')
Discount.where(title: 'Староместный пивовар').first.addresses.create(address: 'г. Минск, ул. Герцена, 4')
Discount.where(title: 'Староместный пивовар').first.addresses.create(address: 'г. Минск, ул. К. Маркса, 21')
Discount.where(title: 'Староместный пивовар').first.addresses.create(address: 'г. Минск, ул. Кирилла и Мефодия, 21')
Discount.where(title: 'Первая туристическая компания').first.addresses.create(address: 'г. Минск, пр. Независимости 11/2, 1-й этаж, офис 8')
Discount.where(title: 'Первая туристическая компания').first.addresses.create(address: 'г. Минск, ТЦ "Замок", пр. Победителей 65, 4-й этаж')
Discount.where(title: 'МалибуТрэвел').first.addresses.create(address: 'г. Минск, ул. П. Мстиславца д.20 офис 222')
Discount.where(title: 'GoldTravel').first.addresses.create(address: 'г. Минск , ул. Дунина-Марцинкевича 2/1, каб. 104')
Discount.where(title: 'Топ Тур').first.addresses.create(address: 'г. Минск, ул. Я. Коласа, 40')
Discount.where(title: 'Топ Тур').first.addresses.create(address: 'г. Минск, пр-т Пушкина, 39, г-ца "Орбита"')
Discount.where(title: 'Топ Тур').first.addresses.create(address: 'г. Минск, ул. Чкалова, 22')
Discount.where(title: 'Топ Тур').first.addresses.create(address: 'г. Минск, пр. Независимости, 39')
Discount.where(title: 'Tez tour').first.addresses.create(address: 'г. Минск, ул. Румянцева, 17')
Discount.where(title: 'Tez tour').first.addresses.create(address: 'г. Минск, пр. Машерова, 76 А')
Discount.where(title: 'Tez tour').first.addresses.create(address: 'г. Минск, пр. Победителей, 65')
Discount.where(title: 'Tez tour').first.addresses.create(address: 'г. Минск, Толбухина, 2')
Discount.where(title: 'Streamline').first.addresses.create(address: 'г. Минск, ул. Романовская слобода, 13')
Discount.where(title: 'Streamline').first.addresses.create(address: 'г. Минск, пер. Броневой, 11')
