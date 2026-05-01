export interface Country {
	name: string;
	phoneCode: string;
	flag: string;
	currencyCode: string;
	currencySymbol: string;
}

export const COUNTRIES: Country[] = [
	{ name: 'Afghanistan', phoneCode: '93', flag: '🇦🇫', currencyCode: 'AFN', currencySymbol: '؋' },
	{ name: 'Albania', phoneCode: '355', flag: '🇦🇱', currencyCode: 'ALL', currencySymbol: 'L' },
	{ name: 'Algeria', phoneCode: '213', flag: '🇩🇿', currencyCode: 'DZD', currencySymbol: 'د.ج' },
	{ name: 'Argentina', phoneCode: '54', flag: '🇦🇷', currencyCode: 'ARS', currencySymbol: '$' },
	{ name: 'Armenia', phoneCode: '374', flag: '🇦🇲', currencyCode: 'AMD', currencySymbol: '֏' },
	{ name: 'Australia', phoneCode: '61', flag: '🇦🇺', currencyCode: 'AUD', currencySymbol: 'A$' },
	{ name: 'Austria', phoneCode: '43', flag: '🇦🇹', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Azerbaijan', phoneCode: '994', flag: '🇦🇿', currencyCode: 'AZN', currencySymbol: '₼' },
	{ name: 'Bahrain', phoneCode: '973', flag: '🇧🇭', currencyCode: 'BHD', currencySymbol: '.د.ب' },
	{ name: 'Bangladesh', phoneCode: '880', flag: '🇧🇩', currencyCode: 'BDT', currencySymbol: '৳' },
	{ name: 'Belarus', phoneCode: '375', flag: '🇧🇾', currencyCode: 'BYN', currencySymbol: 'Br' },
	{ name: 'Belgium', phoneCode: '32', flag: '🇧🇪', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Bolivia', phoneCode: '591', flag: '🇧🇴', currencyCode: 'BOB', currencySymbol: 'Bs.' },
	{ name: 'Bosnia and Herzegovina', phoneCode: '387', flag: '🇧🇦', currencyCode: 'BAM', currencySymbol: 'KM' },
	{ name: 'Brazil', phoneCode: '55', flag: '🇧🇷', currencyCode: 'BRL', currencySymbol: 'R$' },
	{ name: 'Brunei', phoneCode: '673', flag: '🇧🇳', currencyCode: 'BND', currencySymbol: 'B$' },
	{ name: 'Bulgaria', phoneCode: '359', flag: '🇧🇬', currencyCode: 'BGN', currencySymbol: 'лв' },
	{ name: 'Cambodia', phoneCode: '855', flag: '🇰🇭', currencyCode: 'KHR', currencySymbol: '៛' },
	{ name: 'Canada', phoneCode: '1', flag: '🇨🇦', currencyCode: 'CAD', currencySymbol: 'C$' },
	{ name: 'Chile', phoneCode: '56', flag: '🇨🇱', currencyCode: 'CLP', currencySymbol: '$' },
	{ name: 'China', phoneCode: '86', flag: '🇨🇳', currencyCode: 'CNY', currencySymbol: '¥' },
	{ name: 'Colombia', phoneCode: '57', flag: '🇨🇴', currencyCode: 'COP', currencySymbol: '$' },
	{ name: 'Costa Rica', phoneCode: '506', flag: '🇨🇷', currencyCode: 'CRC', currencySymbol: '₡' },
	{ name: 'Croatia', phoneCode: '385', flag: '🇭🇷', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Cuba', phoneCode: '53', flag: '🇨🇺', currencyCode: 'CUP', currencySymbol: '$' },
	{ name: 'Cyprus', phoneCode: '357', flag: '🇨🇾', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Czech Republic', phoneCode: '420', flag: '🇨🇿', currencyCode: 'CZK', currencySymbol: 'Kč' },
	{ name: 'Denmark', phoneCode: '45', flag: '🇩🇰', currencyCode: 'DKK', currencySymbol: 'kr' },
	{ name: 'Dominican Republic', phoneCode: '1809', flag: '🇩🇴', currencyCode: 'DOP', currencySymbol: 'RD$' },
	{ name: 'Ecuador', phoneCode: '593', flag: '🇪🇨', currencyCode: 'USD', currencySymbol: '$' },
	{ name: 'Egypt', phoneCode: '20', flag: '🇪🇬', currencyCode: 'EGP', currencySymbol: 'E£' },
	{ name: 'Estonia', phoneCode: '372', flag: '🇪🇪', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Ethiopia', phoneCode: '251', flag: '🇪🇹', currencyCode: 'ETB', currencySymbol: 'Br' },
	{ name: 'Finland', phoneCode: '358', flag: '🇫🇮', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'France', phoneCode: '33', flag: '🇫🇷', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Georgia', phoneCode: '995', flag: '🇬🇪', currencyCode: 'GEL', currencySymbol: '₾' },
	{ name: 'Germany', phoneCode: '49', flag: '🇩🇪', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Ghana', phoneCode: '233', flag: '🇬🇭', currencyCode: 'GHS', currencySymbol: 'GH₵' },
	{ name: 'Greece', phoneCode: '30', flag: '🇬🇷', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Guatemala', phoneCode: '502', flag: '🇬🇹', currencyCode: 'GTQ', currencySymbol: 'Q' },
	{ name: 'Hong Kong', phoneCode: '852', flag: '🇭🇰', currencyCode: 'HKD', currencySymbol: 'HK$' },
	{ name: 'Hungary', phoneCode: '36', flag: '🇭🇺', currencyCode: 'HUF', currencySymbol: 'Ft' },
	{ name: 'Iceland', phoneCode: '354', flag: '🇮🇸', currencyCode: 'ISK', currencySymbol: 'kr' },
	{ name: 'India', phoneCode: '91', flag: '🇮🇳', currencyCode: 'INR', currencySymbol: '₹' },
	{ name: 'Indonesia', phoneCode: '62', flag: '🇮🇩', currencyCode: 'IDR', currencySymbol: 'Rp' },
	{ name: 'Iran', phoneCode: '98', flag: '🇮🇷', currencyCode: 'IRR', currencySymbol: '﷼' },
	{ name: 'Iraq', phoneCode: '964', flag: '🇮🇶', currencyCode: 'IQD', currencySymbol: 'ع.د' },
	{ name: 'Ireland', phoneCode: '353', flag: '🇮🇪', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Israel', phoneCode: '972', flag: '🇮🇱', currencyCode: 'ILS', currencySymbol: '₪' },
	{ name: 'Italy', phoneCode: '39', flag: '🇮🇹', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Jamaica', phoneCode: '1876', flag: '🇯🇲', currencyCode: 'JMD', currencySymbol: 'J$' },
	{ name: 'Japan', phoneCode: '81', flag: '🇯🇵', currencyCode: 'JPY', currencySymbol: '¥' },
	{ name: 'Jordan', phoneCode: '962', flag: '🇯🇴', currencyCode: 'JOD', currencySymbol: 'د.ا' },
	{ name: 'Kazakhstan', phoneCode: '7', flag: '🇰🇿', currencyCode: 'KZT', currencySymbol: '₸' },
	{ name: 'Kenya', phoneCode: '254', flag: '🇰🇪', currencyCode: 'KES', currencySymbol: 'KSh' },
	{ name: 'Kuwait', phoneCode: '965', flag: '🇰🇼', currencyCode: 'KWD', currencySymbol: 'د.ك' },
	{ name: 'Laos', phoneCode: '856', flag: '🇱🇦', currencyCode: 'LAK', currencySymbol: '₭' },
	{ name: 'Latvia', phoneCode: '371', flag: '🇱🇻', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Lebanon', phoneCode: '961', flag: '🇱🇧', currencyCode: 'LBP', currencySymbol: 'ل.ل' },
	{ name: 'Libya', phoneCode: '218', flag: '🇱🇾', currencyCode: 'LYD', currencySymbol: 'ل.د' },
	{ name: 'Lithuania', phoneCode: '370', flag: '🇱🇹', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Luxembourg', phoneCode: '352', flag: '🇱🇺', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Macau', phoneCode: '853', flag: '🇲🇴', currencyCode: 'MOP', currencySymbol: 'MOP$' },
	{ name: 'Malaysia', phoneCode: '60', flag: '🇲🇾', currencyCode: 'MYR', currencySymbol: 'RM' },
	{ name: 'Maldives', phoneCode: '960', flag: '🇲🇻', currencyCode: 'MVR', currencySymbol: 'Rf' },
	{ name: 'Malta', phoneCode: '356', flag: '🇲🇹', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Mexico', phoneCode: '52', flag: '🇲🇽', currencyCode: 'MXN', currencySymbol: 'MX$' },
	{ name: 'Mongolia', phoneCode: '976', flag: '🇲🇳', currencyCode: 'MNT', currencySymbol: '₮' },
	{ name: 'Morocco', phoneCode: '212', flag: '🇲🇦', currencyCode: 'MAD', currencySymbol: 'د.م.' },
	{ name: 'Myanmar', phoneCode: '95', flag: '🇲🇲', currencyCode: 'MMK', currencySymbol: 'K' },
	{ name: 'Nepal', phoneCode: '977', flag: '🇳🇵', currencyCode: 'NPR', currencySymbol: 'रू' },
	{ name: 'Netherlands', phoneCode: '31', flag: '🇳🇱', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'New Zealand', phoneCode: '64', flag: '🇳🇿', currencyCode: 'NZD', currencySymbol: 'NZ$' },
	{ name: 'Nigeria', phoneCode: '234', flag: '🇳🇬', currencyCode: 'NGN', currencySymbol: '₦' },
	{ name: 'North Korea', phoneCode: '850', flag: '🇰🇵', currencyCode: 'KPW', currencySymbol: '₩' },
	{ name: 'Norway', phoneCode: '47', flag: '🇳🇴', currencyCode: 'NOK', currencySymbol: 'kr' },
	{ name: 'Oman', phoneCode: '968', flag: '🇴🇲', currencyCode: 'OMR', currencySymbol: 'ر.ع.' },
	{ name: 'Pakistan', phoneCode: '92', flag: '🇵🇰', currencyCode: 'PKR', currencySymbol: '₨' },
	{ name: 'Palestine', phoneCode: '970', flag: '🇵🇸', currencyCode: 'ILS', currencySymbol: '₪' },
	{ name: 'Panama', phoneCode: '507', flag: '🇵🇦', currencyCode: 'PAB', currencySymbol: 'B/.' },
	{ name: 'Paraguay', phoneCode: '595', flag: '🇵🇾', currencyCode: 'PYG', currencySymbol: '₲' },
	{ name: 'Peru', phoneCode: '51', flag: '🇵🇪', currencyCode: 'PEN', currencySymbol: 'S/.' },
	{ name: 'Philippines', phoneCode: '63', flag: '🇵🇭', currencyCode: 'PHP', currencySymbol: '₱' },
	{ name: 'Poland', phoneCode: '48', flag: '🇵🇱', currencyCode: 'PLN', currencySymbol: 'zł' },
	{ name: 'Portugal', phoneCode: '351', flag: '🇵🇹', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Qatar', phoneCode: '974', flag: '🇶🇦', currencyCode: 'QAR', currencySymbol: 'ر.ق' },
	{ name: 'Romania', phoneCode: '40', flag: '🇷🇴', currencyCode: 'RON', currencySymbol: 'lei' },
	{ name: 'Russia', phoneCode: '7', flag: '🇷🇺', currencyCode: 'RUB', currencySymbol: '₽' },
	{ name: 'Saudi Arabia', phoneCode: '966', flag: '🇸🇦', currencyCode: 'SAR', currencySymbol: 'ر.س' },
	{ name: 'Serbia', phoneCode: '381', flag: '🇷🇸', currencyCode: 'RSD', currencySymbol: 'din.' },
	{ name: 'Singapore', phoneCode: '65', flag: '🇸🇬', currencyCode: 'SGD', currencySymbol: 'S$' },
	{ name: 'Slovakia', phoneCode: '421', flag: '🇸🇰', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Slovenia', phoneCode: '386', flag: '🇸🇮', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'South Africa', phoneCode: '27', flag: '🇿🇦', currencyCode: 'ZAR', currencySymbol: 'R' },
	{ name: 'South Korea', phoneCode: '82', flag: '🇰🇷', currencyCode: 'KRW', currencySymbol: '₩' },
	{ name: 'Spain', phoneCode: '34', flag: '🇪🇸', currencyCode: 'EUR', currencySymbol: '€' },
	{ name: 'Sri Lanka', phoneCode: '94', flag: '🇱🇰', currencyCode: 'LKR', currencySymbol: 'Rs' },
	{ name: 'Sweden', phoneCode: '46', flag: '🇸🇪', currencyCode: 'SEK', currencySymbol: 'kr' },
	{ name: 'Switzerland', phoneCode: '41', flag: '🇨🇭', currencyCode: 'CHF', currencySymbol: 'CHF' },
	{ name: 'Taiwan', phoneCode: '886', flag: '🇹🇼', currencyCode: 'TWD', currencySymbol: 'NT$' },
	{ name: 'Tanzania', phoneCode: '255', flag: '🇹🇿', currencyCode: 'TZS', currencySymbol: 'TSh' },
	{ name: 'Thailand', phoneCode: '66', flag: '🇹🇭', currencyCode: 'THB', currencySymbol: '฿' },
	{ name: 'Timor-Leste', phoneCode: '670', flag: '🇹🇱', currencyCode: 'USD', currencySymbol: '$' },
	{ name: 'Turkey', phoneCode: '90', flag: '🇹🇷', currencyCode: 'TRY', currencySymbol: '₺' },
	{ name: 'UAE', phoneCode: '971', flag: '🇦🇪', currencyCode: 'AED', currencySymbol: 'د.إ' },
	{ name: 'Uganda', phoneCode: '256', flag: '🇺🇬', currencyCode: 'UGX', currencySymbol: 'USh' },
	{ name: 'Ukraine', phoneCode: '380', flag: '🇺🇦', currencyCode: 'UAH', currencySymbol: '₴' },
	{ name: 'United Kingdom', phoneCode: '44', flag: '🇬🇧', currencyCode: 'GBP', currencySymbol: '£' },
	{ name: 'United States', phoneCode: '1', flag: '🇺🇸', currencyCode: 'USD', currencySymbol: '$' },
	{ name: 'Uruguay', phoneCode: '598', flag: '🇺🇾', currencyCode: 'UYU', currencySymbol: '$U' },
	{ name: 'Uzbekistan', phoneCode: '998', flag: '🇺🇿', currencyCode: 'UZS', currencySymbol: "so'm" },
	{ name: 'Venezuela', phoneCode: '58', flag: '🇻🇪', currencyCode: 'VES', currencySymbol: 'Bs.' },
	{ name: 'Vietnam', phoneCode: '84', flag: '🇻🇳', currencyCode: 'VND', currencySymbol: '₫' },
	{ name: 'Yemen', phoneCode: '967', flag: '🇾🇪', currencyCode: 'YER', currencySymbol: '﷼' },
	{ name: 'Zimbabwe', phoneCode: '263', flag: '🇿🇼', currencyCode: 'ZWL', currencySymbol: 'Z$' }
];

/**
 * Deduplicated list of currencies derived from the countries list.
 * Useful for currency selector dropdowns.
 */
export const CURRENCIES = (() => {
	const seen = new Set<string>();
	const result: { code: string; symbol: string; countries: string[] }[] = [];

	for (const country of COUNTRIES) {
		if (!seen.has(country.currencyCode)) {
			seen.add(country.currencyCode);
			result.push({
				code: country.currencyCode,
				symbol: country.currencySymbol,
				countries: [country.name]
			});
		} else {
			const existing = result.find((currency) => currency.code === country.currencyCode);
			if (existing) {
				existing.countries.push(country.name);
			}
		}
	}

	return result;
})();

/** Default country code for Indonesia */
export const DEFAULT_PHONE_COUNTRY_CODE = '62';

/** Default currency code for Indonesia */
export const DEFAULT_CURRENCY_CODE = 'IDR';
