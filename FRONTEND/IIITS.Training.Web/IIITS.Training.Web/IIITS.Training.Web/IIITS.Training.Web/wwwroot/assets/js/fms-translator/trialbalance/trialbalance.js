$(document).ready(function () {
    var translations = {
        "en": {
            "Print OB": "Print OB",
            "Account Code": "Account Code",
            "Opening Balance": "Opening Balance",
            "Debit": "Debit",
            "Credit": "Credit",
            "Voucher Number": "Voucher Number",
            "Date": "Date",
            "Narration": "Narration",
            "Transtype": "Transtype",
            "Transtypeid": "Transtypeid",
            "Trial Balance": "Trial Balance",
            "Location": "Location",
            "TB Type": "TB Type",
            "For Month-Year": "For Month-Year",
            "Part indicator": "Part indicator",
            "Load": "Load",
            "Print Pdf": "Print Pdf",
            "Print Excel": "Print Excel",
            "Back": "Back",
            // Add more translations for English here
        },

        "hi": {
            "Print OB": "प्रिंट ओबी",
            "Account Code": "खाता कोड",
            "Opening Balance": "खुले शेष",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Voucher Number": "वाउचर नंबर",
            "Date": "तारीख",
            "Narration": "विवरण",
            "Transtype": "लेन-देन प्रकार",
            "Transtypeid": "लेन-देन प्रकार आईडी",
            "Trial Balance": "प्रायोगिक संतुलन",
            "Location": "स्थान",
            "TB Type": "टीबी प्रकार",
            "For Month-Year": "माह-वर्ष के लिए",
            "Part indicator": "भाग संकेतक",
            "Load": "लोड",
            "Print Pdf": "प्रिंट पीडीएफ",
            "Print Excel": "प्रिंट एक्सेल",
            "Back": "पीछे",
            // Add more translations for Hindi here
        },




    };

    // Function to translate labels and buttons
    function translateLabels(language) {
        $('[data-translate]').each(function () {
            var labelText = $(this).data('translate');
            var translatedText = translations[language][labelText];
            if (translatedText) {
                if ($(this).is("button")) {
                    // If the element is a button, set its text content
                    $(this).text(translatedText);
                } else {
                    // For other elements, set their text content
                    $(this).text(translatedText);
                }
            }
        });
    }

    // Language selector change event
    $("#language-selector input[type='radio']").change(function () {

        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);

    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});
