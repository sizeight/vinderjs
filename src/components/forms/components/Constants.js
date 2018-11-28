const countries = [
  {
    label: '--',
    value: '--',
  },
  {
    label: 'Afghanistan',
    value: 'Afghanistan',
  },
  {
    label: 'Albania',
    value: 'Albania',
  },
  {
    label: 'Algeria',
    value: 'Algeria',
  },
  {
    label: 'American Samoa',
    value: 'American Samoa',
  },
  {
    label: 'Andorra',
    value: 'Andorra',
  },
  {
    label: 'Angola',
    value: 'Angola',
  },
  {
    label: 'Anguilla',
    value: 'Anguilla',
  },
  {
    label: 'Antarctica',
    value: 'Antarctica',
  },
  {
    label: 'Antigua & Barbuda',
    value: 'Antigua & Barbuda',
  },
  {
    label: 'Argentina',
    value: 'Argentina',
  },
  {
    label: 'Armenia',
    value: 'Armenia',
  },
  {
    label: 'Aruba',
    value: 'Aruba',
  },
  {
    label: 'Australia',
    value: 'Australia',
  },
  {
    label: 'Austria',
    value: 'Austria',
  },
  {
    label: 'Azerbaijan',
    value: 'Azerbaijan',
  },
  {
    label: 'Bahama',
    value: 'Bahama',
  },
  {
    label: 'Bahrain',
    value: 'Bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'Bangladesh',
  },
  {
    label: 'Barbados',
    value: 'Barbados',
  },
  {
    label: 'Belarus',
    value: 'Belarus',
  },
  {
    label: 'Belgium',
    value: 'Belgium',
  },
  {
    label: 'Belize',
    value: 'Belize',
  },
  {
    label: 'Benin',
    value: 'Benin',
  },
  {
    label: 'Bermuda',
    value: 'Bermuda',
  },
  {
    label: 'Bhutan',
    value: 'Bhutan',
  },
  {
    label: 'Bolivia',
    value: 'Bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'Bosnia and Herzegovina',
  },
  {
    label: 'Botswana',
    value: 'Botswana',
  },
  {
    label: 'Bouvet Island',
    value: 'Bouvet Island',
  },
  {
    label: 'Brazil',
    value: 'Brazil',
  },
  {
    label: 'British Indian Ocean Territory',
    value: 'British Indian Ocean Territory',
  },
  {
    label: 'British Virgin Islands',
    value: 'British Virgin Islands',
  },
  {
    label: 'Brunei Darussalam',
    value: 'Brunei Darussalam',
  },
  {
    label: 'Bulgaria',
    value: 'Bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'Burkina Faso',
  },
  {
    label: 'Burundi',
    value: 'Burundi',
  },
  {
    label: 'Cambodia',
    value: 'Cambodia',
  },
  {
    label: 'Cameroon',
    value: 'Cameroon',
  },
  {
    label: 'Canada',
    value: 'Canada',
  },
  {
    label: 'Cape Verde',
    value: 'Cape Verde',
  },
  {
    label: 'Cayman Islands',
    value: 'Cayman Islands',
  },
  {
    label: 'Central African Republic',
    value: 'Central African Republic',
  },
  {
    label: 'Chad',
    value: 'Chad',
  },
  {
    label: 'Chile',
    value: 'Chile',
  },
  {
    label: 'China',
    value: 'China',
  },
  {
    label: 'Christmas Island',
    value: 'Christmas Island',
  },
  {
    label: 'Cocos',
    value: 'Cocos (Keeling) Islands',
  },
  {
    label: 'Colombia',
    value: 'Colombia',
  },
  {
    label: 'Comoros',
    value: 'Comoros',
  },
  {
    label: 'Congo',
    value: 'Congo',
  },
  {
    label: 'Cook Iislands',
    value: 'Cook Iislands',
  },
  {
    label: 'Costa Rica',
    value: 'Costa Rica',
  },
  {
    label: 'Croatia',
    value: 'Croatia',
  },
  {
    label: 'Cuba',
    value: 'Cuba',
  },
  {
    label: 'Cyprus',
    value: 'Cyprus',
  },
  {
    label: 'Czech Republic',
    value: 'Czech Republic',
  },
  {
    label: 'Denmark',
    value: 'Denmark',
  },
  {
    label: 'Djibouti',
    value: 'Djibouti',
  },
  {
    label: 'Dominica',
    value: 'Dominica',
  },
  {
    label: 'Dominican Republic',
    value: 'Dominican Republic',
  },
  {
    label: 'East Timor',
    value: 'East Timor',
  },
  {
    label: 'Ecuador',
    value: 'Ecuador',
  },
  {
    label: 'Egypt',
    value: 'Egypt',
  },
  {
    label: 'El Salvador',
    value: 'El Salvador',
  },
  {
    label: 'Equatorial Guinea',
    value: 'Equatorial Guinea',
  },
  {
    label: 'Eritrea',
    value: 'Eritrea',
  },
  {
    label: 'Estonia',
    value: 'Estonia',
  },
  {
    label: 'Ethiopia',
    value: 'Ethiopia',
  },
  {
    label: 'Falkland Islands',
    value: 'Falkland Islands (Malvinas)',
  },
  {
    label: 'Faroe Islands',
    value: 'Faroe Islands',
  },
  {
    label: 'Fiji',
    value: 'Fiji',
  },
  {
    label: 'Finland',
    value: 'Finland',
  },
  {
    label: 'France, Metropolitan',
    value: 'France, Metropolitan',
  },
  {
    label: 'France',
    value: 'France',
  },
  {
    label: 'French Guiana',
    value: 'French Guiana',
  },
  {
    label: 'French Polynesia',
    value: 'French Polynesia',
  },
  {
    label: 'French Southern Territories',
    value: 'French Southern Territories',
  },
  {
    label: 'Gabon',
    value: 'Gabon',
  },
  {
    label: 'Gambia',
    value: 'Gambia',
  },
  {
    label: 'Georgia',
    value: 'Georgia',
  },
  {
    label: 'Germany',
    value: 'Germany',
  },
  {
    label: 'Ghana',
    value: 'Ghana',
  },
  {
    label: 'Gibraltar',
    value: 'Gibraltar',
  },
  {
    label: 'Greece',
    value: 'Greece',
  },
  {
    label: 'Greenland',
    value: 'Greenland',
  },
  {
    label: 'Grenada',
    value: 'Grenada',
  },
  {
    label: 'Guadeloupe',
    value: 'Guadeloupe',
  },
  {
    label: 'Guam',
    value: 'Guam',
  },
  {
    label: 'Guatemala',
    value: 'Guatemala',
  },
  {
    label: 'Guinea',
    value: 'Guinea',
  },
  {
    label: 'Guinea-Bissau',
    value: 'Guinea-Bissau',
  },
  {
    label: 'Guyana',
    value: 'Guyana',
  },
  {
    label: 'Haiti',
    value: 'Haiti',
  },
  {
    label: 'Heard & McDonald Islands',
    value: 'Heard & McDonald Islands',
  },
  {
    label: 'Honduras',
    value: 'Honduras',
  },
  {
    label: 'Hong Kong',
    value: 'Hong Kong',
  },
  {
    label: 'Hungary',
    value: 'Hungary',
  },
  {
    label: 'Iceland',
    value: 'Iceland',
  },
  {
    label: 'India',
    value: 'India',
  },
  {
    label: 'Indonesia',
    value: 'Indonesia',
  },
  {
    label: 'Iraq',
    value: 'Iraq',
  },
  {
    label: 'Ireland',
    value: 'Ireland',
  },
  {
    label: 'Islamic Republic of Iran',
    value: 'Islamic Republic of Iran',
  },
  {
    label: 'Israel',
    value: 'Israel',
  },
  {
    label: 'Italy',
    value: 'Italy',
  },
  {
    label: 'Ivory Coast',
    value: 'Ivory Coast',
  },
  {
    label: 'Jamaica',
    value: 'Jamaica',
  },
  {
    label: 'Japan',
    value: 'Japan',
  },
  {
    label: 'Jordan',
    value: 'Jordan',
  },
  {
    label: 'Kazakhstan',
    value: 'Kazakhstan',
  },
  {
    label: 'Kenya',
    value: 'Kenya',
  },
  {
    label: 'Kiribati',
    value: 'Kiribati',
  },
  {
    label: 'Korea, Democratic People\'s Republic of',
    value: 'Korea, Democratic People\'s Republic of',
  },
  {
    label: 'Korea, Republic of',
    value: 'Korea, Republic of',
  },
  {
    label: 'Kuwait',
    value: 'Kuwait',
  },
  {
    label: 'Kyrgyzstan',
    value: 'Kyrgyzstan',
  },
  {
    label: 'Lao People\'s Democratic Republic',
    value: 'Lao People\'s Democratic Republic',
  },
  {
    label: 'Latvia',
    value: 'Latvia',
  },
  {
    label: 'Lebanon',
    value: 'Lebanon',
  },
  {
    label: 'Lesotho',
    value: 'Lesotho',
  },
  {
    label: 'Liberia',
    value: 'Liberia',
  },
  {
    label: 'Libyan Arab Jamahiriya',
    value: 'Libyan Arab Jamahiriya',
  },
  {
    label: 'Liechtenstein',
    value: 'Liechtenstein',
  },
  {
    label: 'Lithuania',
    value: 'Lithuania',
  },
  {
    label: 'Luxembourg',
    value: 'Luxembourg',
  },
  {
    label: 'Macau',
    value: 'Macau',
  },
  {
    label: 'Madagascar',
    value: 'Madagascar',
  },
  {
    label: 'Malawi',
    value: 'Malawi',
  },
  {
    label: 'Malaysia',
    value: 'Malaysia',
  },
  {
    label: 'Maldives',
    value: 'Maldives',
  },
  {
    label: 'Mali',
    value: 'Mali',
  },
  {
    label: 'Malta',
    value: 'Malta',
  },
  {
    label: 'Marshall Islands',
    value: 'Marshall Islands',
  },
  {
    label: 'Martinique',
    value: 'Martinique',
  },
  {
    label: 'Mauritania',
    value: 'Mauritania',
  },
  {
    label: 'Mauritius',
    value: 'Mauritius',
  },
  {
    label: 'Mayotte',
    value: 'Mayotte',
  },
  {
    label: 'Mexico',
    value: 'Mexico',
  },
  {
    label: 'Micronesia',
    value: 'Micronesia',
  },
  {
    label: 'Moldova, Republic of',
    value: 'Moldova, Republic of',
  },
  {
    label: 'Monaco',
    value: 'Monaco',
  },
  {
    label: 'Mongolia',
    value: 'Mongolia',
  },
  {
    label: 'Monserrat',
    value: 'Monserrat',
  },
  {
    label: 'Morocco',
    value: 'Morocco',
  },
  {
    label: 'Mozambique',
    value: 'Mozambique',
  },
  {
    label: 'Myanmar',
    value: 'Myanmar',
  },
  {
    label: 'Namibia',
    value: 'Namibia',
  },
  {
    label: 'Nauru',
    value: 'Nauru',
  },
  {
    label: 'Nepal',
    value: 'Nepal',
  },
  {
    label: 'Netherlands Antilles',
    value: 'Netherlands Antilles',
  },
  {
    label: 'Netherlands',
    value: 'Netherlands',
  },
  {
    label: 'New Caledonia',
    value: 'New Caledonia',
  },
  {
    label: 'New Zealand',
    value: 'New Zealand',
  },
  {
    label: 'Nicaragua',
    value: 'Nicaragua',
  },
  {
    label: 'Niger',
    value: 'Niger',
  },
  {
    label: 'Nigeria',
    value: 'Nigeria',
  },
  {
    label: 'Niue',
    value: 'Niue',
  },
  {
    label: 'Norfolk Island',
    value: 'Norfolk Island',
  },
  {
    label: 'Northern Mariana Islands',
    value: 'Northern Mariana Islands',
  },
  {
    label: 'Norway',
    value: 'Norway',
  },
  {
    label: 'Oman',
    value: 'Oman',
  },
  {
    label: 'Pakistan',
    value: 'Pakistan',
  },
  {
    label: 'Palau',
    value: 'Palau',
  },
  {
    label: 'Panama',
    value: 'Panama',
  },
  {
    label: 'Papua New Guinea',
    value: 'Papua New Guinea',
  },
  {
    label: 'Paraguay',
    value: 'Paraguay',
  },
  {
    label: 'Peru',
    value: 'Peru',
  },
  {
    label: 'Philippines',
    value: 'Philippines',
  },
  {
    label: 'Pitcairn',
    value: 'Pitcairn',
  },
  {
    label: 'Poland',
    value: 'Poland',
  },
  {
    label: 'Portugal',
    value: 'Portugal',
  },
  {
    label: 'Puerto Rico',
    value: 'Puerto Rico',
  },
  {
    label: 'Qatar',
    value: 'Qatar',
  },
  {
    label: 'Reunion',
    value: 'Reunion',
  },
  {
    label: 'Romania',
    value: 'Romania',
  },
  {
    label: 'Russian Federation',
    value: 'Russian Federation',
  },
  {
    label: 'Rwanda',
    value: 'Rwanda',
  },
  {
    label: 'Saint Lucia',
    value: 'Saint Lucia',
  },
  {
    label: 'Samoa',
    value: 'Samoa',
  },
  {
    label: 'San Marino',
    value: 'San Marino',
  },
  {
    label: 'Sao Tome & Principe',
    value: 'Sao Tome & Principe',
  },
  {
    label: 'Saudi Arabia',
    value: 'Saudi Arabia',
  },
  {
    label: 'Senegal',
    value: 'Senegal',
  },
  {
    label: 'Seychelles',
    value: 'Seychelles',
  },
  {
    label: 'Sierra Leone',
    value: 'Sierra Leone',
  },
  {
    label: 'Singapore',
    value: 'Singapore',
  },
  {
    label: 'Slovakia',
    value: 'Slovakia',
  },
  {
    label: 'Slovenia',
    value: 'Slovenia',
  },
  {
    label: 'Solomon Islands',
    value: 'Solomon Islands',
  },
  {
    label: 'Somalia',
    value: 'Somalia',
  },
  {
    label: 'South Africa',
    value: 'South Africa',
  },
  {
    label: 'South Georgia and the South Sandwich Islands',
    value: 'South Georgia and the South Sandwich Islands',
  },
  {
    label: 'Spain',
    value: 'Spain',
  },
  {
    label: 'Sri Lanka',
    value: 'Sri Lanka',
  },
  {
    label: 'St. Helena',
    value: 'St. Helena',
  },
  {
    label: 'St. Kitts and Nevis',
    value: 'St. Kitts and Nevis',
  },
  {
    label: 'St. Pierre & Miquelon',
    value: 'St. Pierre & Miquelon',
  },
  {
    label: 'St. Vincent & the Grenadines',
    value: 'St. Vincent & the Grenadines',
  },
  {
    label: 'Sudan',
    value: 'Sudan',
  },
  {
    label: 'Suriname',
    value: 'Suriname',
  },
  {
    label: 'Svalbard & Jan Mayen Islands',
    value: 'Svalbard & Jan Mayen Islands',
  },
  {
    label: 'Swaziland',
    value: 'Swaziland',
  },
  {
    label: 'Sweden',
    value: 'Sweden',
  },
  {
    label: 'Switzerland',
    value: 'Switzerland',
  },
  {
    label: 'Syrian Arab Republic',
    value: 'Syrian Arab Republic',
  },
  {
    label: 'Taiwan, Province of China',
    value: 'Taiwan, Province of China',
  },
  {
    label: 'Tajikistan',
    value: 'Tajikistan',
  },
  {
    label: 'Tanzania, United Republic of',
    value: 'Tanzania, United Republic of',
  },
  {
    label: 'Thailand',
    value: 'Thailand',
  },
  {
    label: 'Togo',
    value: 'Togo',
  },
  {
    label: 'Tokelau',
    value: 'Tokelau',
  },
  {
    label: 'Tonga',
    value: 'Tonga',
  },
  {
    label: 'Trinidad & Tobago',
    value: 'Trinidad & Tobago',
  },
  {
    label: 'Tunisia',
    value: 'Tunisia',
  },
  {
    label: 'Turkey',
    value: 'Turkey',
  },
  {
    label: 'Turkmenistan',
    value: 'Turkmenistan',
  },
  {
    label: 'Turks & Caicos Islands',
    value: 'Turks & Caicos Islands',
  },
  {
    label: 'Tuvalu',
    value: 'Tuvalu',
  },
  {
    label: 'Uganda',
    value: 'Uganda',
  },
  {
    label: 'Ukraine',
    value: 'Ukraine',
  },
  {
    label: 'United Arab Emirates',
    value: 'United Arab Emirates',
  },
  {
    label: 'United Kingdom',
    value: 'United Kingdom',
  },
  {
    label: 'United States Minor Outlying Islands',
    value: 'United States Minor Outlying Islands',
  },
  {
    label: 'United States of America',
    value: 'United States of America',
  },
  {
    label: 'United States Virgin Islands',
    value: 'United States Virgin Islands',
  },
  {
    label: 'Uruguay',
    value: 'Uruguay',
  },
  {
    label: 'Uzbekistan',
    value: 'Uzbekistan',
  },
  {
    label: 'Vanuatu',
    value: 'Vanuatu',
  },
  {
    label: 'Vatican City State',
    value: 'Vatican City State (Holy See)',
  },
  {
    label: 'Venezuela',
    value: 'Venezuela',
  },
  {
    label: 'Viet Nam',
    value: 'Viet Nam',
  },
  {
    label: 'Wallis & Futuna Islands',
    value: 'Wallis & Futuna Islands',
  },
  {
    label: 'Western Sahara',
    value: 'Western Sahara',
  },
  {
    label: 'Yemen',
    value: 'Yemen',
  },
  {
    label: 'Yugoslavia',
    value: 'Yugoslavia',
  },
  {
    label: 'Zaire',
    value: 'Zaire',
  },
  {
    label: 'Zimbabwe',
    value: 'Zimbabwe',
  },
  {
    label: 'Zambia',
    value: 'Zambia',
  },
];

export default countries;
