import './style.css'

// Language Translations
const translations = {
    en: {
        sub_logo: "DOUBLE MILK",
        nav_product: "Our Product",
        nav_find: "Find Us",
        nav_business: "For Business",
        nav_sample: "Get a Sample",
        landing_kicker: "Discover MILBOK® Double Milk",
        landing_headline: "The barista's secret – now available to everyone.",
        landing_text: "You have just received your Milbok to your cafe and you might be wondering, how to properly test it. Here is a guide of the drinks you can't miss and one pro barista tip to try something special.",
        feat_sweet: "Naturally Sweet",
        feat_nutrition: "Double Nutrition",
        feat_additives: "No Additives",
        feat_versatile: "Versatile and Creative",
        learn_more: "LEARN MORE",
        guide_title: "Tasting Guide",
        badge_trending: "Trending",
        badge_tip: "Barista Tip",
        recipe_label: "Recipe",

        // Dirty Coffee
        dirty_title: "Dirty Coffee",
        dirty_desc: "Hot espresso over cold MILBOK. This refreshing drink, which comes from Asia, creates a stunning visual layer and a unique temperature contrast.",
        recipe_base_label: "Base:",
        dirty_recipe_base: "Cold MILBOK (120ml)",
        recipe_top_label: "Top:",
        dirty_recipe_top: "Double Espresso (Hot)",
        recipe_method_label: "Method:",
        dirty_recipe_method: "Pour espresso gently over the back of a spoon to layer.",

        // Flat Double White
        flat_title: "Flat Double White",
        flat_desc: "Flat White, but elevated. With double the milk power, you get not only double the coffee kick but a creamier, richer texture that transforms the classic into a luxury experience.",
        recipe_coffee_label: "Coffee:",
        flat_recipe_coffee: "18g Espresso",
        recipe_milk_label: "Milk:",
        flat_recipe_milk: "120ml Double Milk (Steamed)",
        recipe_texture_label: "Texture:",
        flat_recipe_texture: "Microfoam, velvety smooth.",

        // Matcha
        matcha_title: "Matcha Double White",
        matcha_desc: "Same as regular matcha but with double milk for enhanced sweetness and reduced bitterness. A vibrant green drink that tastes as good as it looks.",
        matcha_recipe_base: "Matcha Paste (3g + 30ml water)",
        matcha_recipe_milk: "150ml Double Milk (Steamed/Iced)",

        // Cold Brew
        cold_title: "Cold Brew Cloud",
        cold_desc: "A refreshing cold brew topped with a thick, rich Milbok foam. The double milk creates a stable, creamy head that lasts.",
        cold_recipe_base: "Cold Brew Coffee (200ml)",
        cold_recipe_top: "Cold Milbok Foam (50ml)",

        // Metrics
        metric_cost: "Cost Increase",
        metric_value: "Value Increase",
        // Implementation Section
        impl_title: "Implementation in the menu",
        impl_addon_title: "Add-on Option",
        impl_addon_desc: "Let your customers choose, if they would like to have their drink on double milk as an addon.",
        impl_fdw_title: "Flat Double White",
        impl_fdw_desc: "Implement flat double white as a drink in the menu for better visibility and better sales.",
        impl_dirty_title: "Dirty Coffee",
        impl_dirty_desc: "Dirty coffee is a highly trending drink in the world of coffee, slowly getting famous globally. Asia has proven that texture matters, and our drink became so popular that cafes in Dubai now make only dirty coffee.",
        impl_specials_title: "Use it in your specials",
        impl_specials_intro: "Milbok has unseen qualities which widens the usage of milk beverage.",

        impl_benefit_layer_title: "Layering",
        impl_benefit_layer: "Is able to layer perfectly.",
        impl_benefit_tea_title: "Tea Drinks",
        impl_benefit_tea: "Since it is double as thick, it works great with tea drinks. It does not dilute the flavor and fights wateriness.",
        impl_benefit_iced_title: "Iced Beverages",
        impl_benefit_iced: "Works great in iced beverages, leaves room to drink beverage longer, cause even small dilution with water just brings it to consistency of regular milk.",
        impl_benefit_protein_title: "Double Protein",
        impl_benefit_protein: "Double the protein and use of good quality protein improves the quality of milk foam. Add some % of Milbok to your daily drink and improve quality of your foam.",
        // Feedback Modal
        feedback_btn: "Submit Feedback",
        feedback_title: "Rate the Drinks",
        feedback_submit: "Submit Ratings",
        slider_meh: "😐 Meh",
        slider_delicious: "Delicious 🤩",
        comment_placeholder: "Optional comment...",
        feedback_thanks_title: "Thank you! 🍾",
        feedback_thanks_text: "Your feedback helps us improve.",
        pdf_btn: "⬇ PDF",
        order_title: "Where to Order",
        order_prague: "Prague",
        order_morava: "Morava",
    },

    cz: {
        sub_logo: "DOUBLE MILK",
        nav_product: "Náš Produkt",
        nav_find: "Kde Koupit",
        nav_business: "Pro Firmy",
        nav_sample: "Vzorek Zdarma",
        landing_kicker: "Objevte MILBOK® Double Milk",
        landing_headline: "Baristovo tajemství – nyní dostupné všem.",
        landing_text: "Právě jste obdrželi svůj Milbok do kavárny a možná přemýšlíte, jak ho správně otestovat. Zde je průvodce nápoji, které nesmíte minout, a jeden pro barista tip na závěr.",
        feat_sweet: "Přirozeně Sladké",
        feat_nutrition: "Dvojitá Výživa",
        feat_additives: "Bez Aditiv",
        feat_versatile: "Všestranné a Kreativní",
        learn_more: "ZJISTIT VÍCE",
        guide_title: "Průvodce Ochutnávkou",
        badge_trending: "Populární",
        badge_tip: "Tip Baristy",
        recipe_label: "Recept",

        // Dirty Coffee
        dirty_title: "Dirty Coffee",
        dirty_desc: "Horké espresso na studeném MILBOKu. Tento osvěžující nápoj původem z Asie vytváří úžasný vizuální efekt a unikátní kontrast teplot.",
        recipe_base_label: "Základ:",
        dirty_recipe_base: "Studený MILBOK (120ml)",
        recipe_top_label: "Vršek:",
        dirty_recipe_top: "Dvojité Espresso (Horké)",
        recipe_method_label: "Postup:",
        dirty_recipe_method: "Nalijte espresso opatrně přes lžičku pro vytvoření vrstvy.",

        // Flat Double White
        flat_title: "Flat Double White",
        flat_desc: "Flat White, ale na vyšší úrovni. S dvojitou silou mléka získáte nejen plnější chuť kávy, ale i krémovější texturu, která mění klasiku luxusní zážitek.",
        recipe_coffee_label: "Káva:",
        flat_recipe_coffee: "18g Espresso",
        recipe_milk_label: "Mléko:",
        flat_recipe_milk: "120ml Double Milk (Našlehané)",
        recipe_texture_label: "Textura:",
        flat_recipe_texture: "Mikrovlhká pěna, sametově hladká.",

        // Matcha
        matcha_title: "Matcha Double White",
        matcha_desc: "Stejné jako běžná matcha, ale s dvojitým mlékem pro větší sladkost a sníženou hořkost. Zářivě zelený nápoj, který chutná tak dobře, jak vypadá.",
        matcha_recipe_base: "Matcha Pasta (3g + 30ml vody)",
        matcha_recipe_milk: "150ml Double Milk (Teplé/Ledové)",

        // Cold Brew
        cold_title: "Cold Brew Cloud",
        cold_desc: "Osvěžující cold brew zakončené hustou, bohatou pěnou z Milboku. Dvojité mléko vytváří stabilní, krémovou čepici, která drží.",
        cold_recipe_base: "Cold Brew Káva (200ml)",
        cold_recipe_top: "Studená pěna Milbok (50ml)",

        // Metrics
        metric_cost: "Náklad",
        metric_value: "Hodnota +",
        // Implementation Section - CZ
        impl_title: "Implementace do menu",
        impl_addon_title: "Možnost Add-on",
        impl_addon_desc: "Nechte zákazníky vybrat si, zda chtějí svůj nápoj s dvojitým mlékem jako příplatek.",
        impl_fdw_title: "Flat Double White",
        impl_fdw_desc: "Zařaďte Flat Double White jako samostatný nápoj do menu pro lepší viditelnost a vyšší prodeje.",
        impl_dirty_title: "Dirty Coffee",
        impl_dirty_desc: "Dirty kofee je vysoce trendující nápoj ve světě kávy, který se pomalu stává slavným po celém světě. Asie dokázala, že na textuře záleží, a náš nápoj se stal tak populárním, že kavárny v Dubaji nyní dělají pouze dirty coffee.",
        impl_specials_title: "Použití ve speciálech",
        impl_specials_intro: "Milbok má nevídané vlastnosti, které rozšiřují využití mléčných nápojů.",

        impl_benefit_layer_title: "Vrstvení",
        impl_benefit_layer: "Dokáže se perfektně vrstvit.",
        impl_benefit_tea_title: "Čajové Nápoje",
        impl_benefit_tea: "Jelikož je dvakrát tak hustý, skvěle funguje s čajovými nápoji. Neředí chuť a bojuje proti vodnatosti.",
        impl_benefit_iced_title: "Ledové Nápoje",
        impl_benefit_iced: "Skvěle funguje v ledových nápojích, umožňuje pít nápoj déle, protože i malé naředění vodou ho jen přiblíží konzistenci běžného mléka.",
        impl_benefit_protein_title: "Dvojitý Protein",
        impl_benefit_protein: "Dvojnásobek proteinu a použití kvalitního proteinu zlepšuje kvalitu mléčné pěny. Přidejte trochu Milboku do svého denního nápoje a zlepšete kvalitu pěny.",
        // Feedbackový Modal
        feedback_btn: "Odeslat Zpětnou Vazbu",
        feedback_title: "Ohođnoťte Nápoje",
        feedback_submit: "Odeslat Hodnocení",
        slider_meh: "😐 Průměrné",
        slider_delicious: "Delikiosní 🤩",
        comment_placeholder: "Volitelný komentář...",
        feedback_thanks_title: "Děkujeme! 🍾",
        feedback_thanks_text: "Vaše zpětná vazba nám pomáhá zlepšovat.",
        pdf_btn: "⬇ PDF",
        order_title: "Kde Objednat",
        order_prague: "Praha",
        order_morava: "Morava",
    }
};

// Current State
let currentLang = 'cz';
let currentCurrency = 'czk';

// DOM Elements
const elements = document.querySelectorAll('[data-i18n]');
const prices = document.querySelectorAll('[data-price-usd]');
const langBtns = document.querySelectorAll('[data-lang]');
const currencyBtns = document.querySelectorAll('[data-currency]');

// Function to update texts
function updateLanguage(lang) {
    currentLang = lang;

    // Update Buttons state
    langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update Texts
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update textarea placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
    });
}

// Function to update currency
function updateCurrency(curr) {
    currentCurrency = curr;

    // Update Buttons state
    currencyBtns.forEach(btn => {
        if (btn.dataset.currency === curr) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update Prices
    prices.forEach(el => {
        const val = el.dataset[`price${curr.charAt(0).toUpperCase() + curr.slice(1)}`]; // priceUsd or priceCzk
        const symbol = curr === 'usd' ? '$' : 'Kč';

        // Format: +$0.15 or +4 Kč
        if (curr === 'usd') {
            el.innerHTML = `+<span class="currency-symbol">${symbol}</span><span class="price-val">${val}</span>`;
        } else {
            el.innerHTML = `+<span class="price-val">${val}</span> <span class="currency-symbol">${symbol}</span>`;
        }
    });
}

// Event Listeners
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateCurrency(btn.dataset.currency);
    });
});

// Initialize
updateLanguage('cz');
updateCurrency('czk');

// ===== FEEDBACK MODAL =====
const modal = document.getElementById('feedbackModal');
const openBtn = document.getElementById('openFeedback');
const closeBtn = document.getElementById('closeFeedback');
const feedbackForm = document.getElementById('feedbackForm');

if (openBtn) openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

// Close modal
function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);

// Close when clicking backdrop
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

// Live slider value updates
document.querySelectorAll('.feedback-slider').forEach(slider => {
    const card = slider.closest('.feedback-drink-card');
    const display = card.querySelector('.slider-val-display');

    // Update gradient fill and value display
    function updateSlider() {
        const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, var(--primary-blue) ${pct}%, #ddd ${pct}%)`;
        display.textContent = slider.value;
    }

    slider.addEventListener('input', updateSlider);
    updateSlider(); // init
});

// Re-initialize placeholders
updateLanguage('cz');

// Form submission
if (feedbackForm) feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // ─── Replace these two values with yours from emailjs.com ───
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    // ────────────────────────────────────────────────────────────

    const submitBtn = feedbackForm.querySelector('.btn-submit-feedback');
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Sending...';

    // Collect slider values and comments
    const formData = new FormData(feedbackForm);
    const templateParams = {
        to_email: 'ondrej@milbok.me',
        dirty_coffee: formData.get('dirty_coffee') + '/10',
        dirty_coffee_comment: formData.get('dirty_coffee_comment') || '—',
        flat_double_white: formData.get('flat_double_white') + '/10',
        flat_double_white_comment: formData.get('flat_double_white_comment') || '—',
        matcha_double_white: formData.get('matcha_double_white') + '/10',
        matcha_double_white_comment: formData.get('matcha_double_white_comment') || '—',
        cold_brew_cloud: formData.get('cold_brew_cloud') + '/10',
        cold_brew_cloud_comment: formData.get('cold_brew_cloud_comment') || '—',
    };

    if (typeof emailjs === 'undefined') {
        console.warn('EmailJS not available.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Ratings';
        alert('Email service unavailable. Please try again later.');
        return;
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            // Success — show thank you
            const t = translations[currentLang];
            feedbackForm.innerHTML = `
              <div class="feedback-success">
                <h3>${t.feedback_thanks_title || 'Thank you! 🍾'}</h3>
                <p>${t.feedback_thanks_text || 'Your feedback helps us improve.'}</p>
              </div>
            `;
            setTimeout(() => {
                closeModal();
                setTimeout(() => location.reload(), 300);
            }, 2000);
        })
        .catch((err) => {
            // Error — re-enable button
            console.error('EmailJS error:', err);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Ratings';
            alert('Failed to send feedback. Please try again.');
        });
});

// ===== PDF EXPORT =====
const pdfBtn = document.getElementById('downloadPdf');

// Small toast helper
function showPrintTip() {
    const tip = document.createElement('div');
    tip.style.cssText = `
        position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
        background: #1A1A1A; color: #fff; padding: 0.75rem 1.5rem;
        border-radius: 8px; font-size: 0.9rem; font-weight: 600;
        z-index: 9999; white-space: nowrap; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    tip.textContent = '💡 In the print dialog: uncheck "Headers and Footers" for cleanest result';
    document.body.appendChild(tip);
    setTimeout(() => tip.remove(), 6000);
}

if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
        window.print();
        showPrintTip();
    });
}

