const translations = {
    ru: {
        nav_services: "Услуги и Цены",
        nav_contacts: "Контакты",
        hero_title: "Ваш ключ к идеальной кредитной истории",
        hero_subtitle: "Профессиональное улучшение рейтинга, удаление негативных записей и полное восстановление кредита. Надежно и быстро.",
        btn_whatsapp: "Написать в WhatsApp",
        btn_telegram: "Написать в Telegram",
        services_title: "Наши Услуги и Цены",
        boost_title: "Цены на Буст",
        boost_subtitle: "Повышение лимитов и истории",
        boost_age: "Возраст",
        boost_price1: "Цена",
        boost_limits: "Лимиты",
        boost_price2: "Цена",
        clean_title: "Удаление (Чистка)",
        clean_subtitle: "Collection or Late Payment",
        del_1: "1 Collection / 1 Late Payment",
        del_2: "2 Collections / 2 Late Payments",
        del_3: "3 Collections / 3 Late Payments",
        del_4: "4 Collections / 4 Late Payments",
        del_5: "5-10 Collections / 5-10 Late Payments",
        inq_title: "Удаление Инкурии",
        inq_subtitle: "Inquiries Removal",
        inq_1: "от 1 до 10",
        inq_price_1: "$400 (за все)",
        inq_more: "далее",
        inq_price_more: "$40 за шт",
        other_title: "Дополнительные услуги",
        other_subtitle: "Специальные решения",
        eviction: "EVICTION (Выселения)",
        repo: "REPOSSESSION (Забрали машину)",
        fix_name: "ФИКС ИМЕНИ / АДРЕСА",
        all_bureaus: "во всех 3 бюро",
        contacts_title: "Свяжитесь с нами",
        address_title: "Адрес",
        messengers_title: "Мессенджеры",
        social_title: "Социальные сети",
        footer_rights: "Все права защищены."
    },
    en: {
        nav_services: "Services & Pricing",
        nav_contacts: "Contacts",
        hero_title: "Your key to a perfect credit history",
        hero_subtitle: "Professional rating improvement, negative records removal, and full credit restoration. Reliable and fast.",
        btn_whatsapp: "Message on WhatsApp",
        btn_telegram: "Message on Telegram",
        services_title: "Our Services & Pricing",
        boost_title: "Boost Pricing",
        boost_subtitle: "Limits and history increase",
        boost_age: "Age",
        boost_price1: "Price",
        boost_limits: "Limits",
        boost_price2: "Price",
        clean_title: "Removal (Cleaning)",
        clean_subtitle: "Collection or Late Payment",
        del_1: "1 Collection or 1 Late Payment",
        del_2: "2 Collections or 2 Late Payments",
        del_3: "3 Collections or 3 Late Payments",
        del_4: "4 Collections or 4 Late Payments",
        del_5: "5-10 Collections or 5-10 Late Payments",
        inq_title: "Inquiries Removal",
        inq_subtitle: "Inquiries Removal",
        inq_1: "from 1 to 10",
        inq_price_1: "$400 (for all)",
        inq_more: "after",
        inq_price_more: "$40 each",
        other_title: "Additional Services",
        other_subtitle: "Special solutions",
        eviction: "EVICTION",
        repo: "REPOSSESSION",
        fix_name: "NAME / ADDRESS FIX",
        all_bureaus: "across all 3 bureaus",
        contacts_title: "Contact Us",
        address_title: "Address",
        messengers_title: "Messengers",
        social_title: "Social Media",
        footer_rights: "All rights reserved."
    }
};

let currentLang = 'ru';

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('langToggle');
    
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langToggleBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        updateLanguage(currentLang);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
