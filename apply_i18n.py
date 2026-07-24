import json
import os
import re

with open('/Users/thanya/Desktop/primemobility-prototype/src/locales/en.json', 'r', encoding='utf-8') as f:
    en_dict = json.load(f)["translation"]

def process_file(filepath, is_component=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add import
    if "useTranslation" not in content:
        content = "import { useTranslation } from 'react-i18next';\n" + content
    
    # Add const { t } = useTranslation(); inside the default exported function
    if is_component and "const { t } = useTranslation();" not in content:
        content = re.sub(
            r'(export default function \w+\(.*\) \{)',
            r'\1\n  const { t } = useTranslation();',
            content
        )
        content = re.sub(
            r'(function ContactUs\(\) \{)',
            r'\1\n  const { t } = useTranslation();',
            content
        )
    
    # Manual targeted replacements to be safe
    # For Home.jsx
    content = content.replace('"The system helps us manage our vehicle fleet much more easily. It truly saves time and costs."', 't("The system helps us manage our vehicle fleet much more easily. It truly saves time and costs.")')
    content = content.replace('"Somchai Jaidee"', 't("Somchai Jaidee")')
    content = content.replace('"Transport Manager, Thai Logistics Co., Ltd."', 't("Transport Manager, Thai Logistics Co., Ltd.")')
    content = content.replace('"The comprehensive service allowed us to transition to EV with confidence and seamlessly. The team takes great care of us."', 't("The comprehensive service allowed us to transition to EV with confidence and seamlessly. The team takes great care of us.")')
    content = content.replace('"Somying Keng-ngan"', 't("Somying Keng-ngan")')
    content = content.replace('"Operations Director, Green Transport Corp."', 't("Operations Director, Green Transport Corp.")')
    content = content.replace('"We can track the vehicle status in real-time, and it clearly saves energy costs."', 't("We can track the vehicle status in real-time, and it clearly saves energy costs.")')
    content = content.replace('"Wichai Rakchart"', 't("Wichai Rakchart")')
    
    # Hero Home
    content = content.replace('<span className="desktop-nowrap">Comprehensive EV Fleet</span><br className="desktop-break" /> that accelerates your business growth', '{t(\'<span className="desktop-nowrap">Comprehensive EV Fleet</span><br className="desktop-break" /> that accelerates your business growth\')}')
    
    # Using python to replace JSX text
    # Sort strings by length descending to avoid partial replacements
    sorted_strings = sorted(en_dict.keys(), key=len, reverse=True)
    
    # Special cases
    content = content.replace('placeholder="Company Name *"', 'placeholder={t("Company Name *")}')
    content = content.replace('placeholder="Contact Name *"', 'placeholder={t("Contact Name *")}')
    content = content.replace('placeholder="Department *"', 'placeholder={t("Department *")}')
    content = content.replace('placeholder="Email Address *"', 'placeholder={t("Email Address *")}')
    content = content.replace('placeholder="Phone Number *"', 'placeholder={t("Phone Number *")}')
    content = content.replace('placeholder="Inquiry Details *"', 'placeholder={t("Inquiry Details *")}')
    
    content = content.replace('I have read and agree to the terms and conditions in the ', '{t("I have read and agree to the terms and conditions in the ")}')
    content = content.replace('Privacy Policy</a>.', '{t("Privacy Policy")}</a>{t(".")}')
    
    content = content.replace('<span>Submit</span>', '<span>{t("Submit")}</span>')
    
    # General replacements for JSX text
    # We only replace if the text is inside >...< or a literal
    for s in sorted_strings:
        if s in ["Company Name *", "Contact Name *", "Department *", "Email Address *", "Phone Number *", "Inquiry Details *", "I have read and agree to the terms and conditions in the ", "Privacy Policy", ".", "Submit"]:
            continue
            
        if s == '<span className="desktop-nowrap">Comprehensive EV Fleet</span><br className="desktop-break" /> that accelerates your business growth':
            continue
        
        # Check if s is used as object property value: 's' -> t('s')
        content = content.replace(f"'{s}'", f"t('{s}')")
        content = content.replace(f'"{s}"', f't("{s}")')
        
        # Check if s is inside tags: >s< -> >{t("s")}<
        content = content.replace(f'>{s}<', f'>{{t("{s}")}}<')
        # Check if s is inside tags but with spaces/newlines: not doing regex to be safe, just doing exact matching
        # Actually, some text might be like >\n  s\n<
        # Better to replace >s< and let it be
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('/Users/thanya/Desktop/primemobility-prototype/src/pages/Home.jsx')
process_file('/Users/thanya/Desktop/primemobility-prototype/src/pages/AboutUs.jsx')
process_file('/Users/thanya/Desktop/primemobility-prototype/src/components/ContactUs.jsx')
process_file('/Users/thanya/Desktop/primemobility-prototype/src/components/Faq.jsx', is_component=False) # Faq doesn't need useTranslation because it receives props, but wait, Faq component doesn't have hardcoded text

print("I18n applied to components.")
