import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'ja', label: '日本語' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
  };

  return (
    <div className="language-selector-wrapper">
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          displayEmpty
          sx={{
            color: '#333',
            backgroundColor: '#fff',
            '& .MuiSelect-icon': {
              color: '#333'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#007cba'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#007cba'
            }
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
