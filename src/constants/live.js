const live = [
  {
    id: "1",
    securityCode: "721HDFCL22",
    issuerName: "HDFC",
    couponRate: "7.21",
    faceValue: "1000",
    ltp: "999.99",
    creditRating: "CARE AAA Stable / CRISIL AAA Stable",
    maturityDate: "30-12-2022",
    bidPrice: "998.49",
    askPrice: "999.99",
    yield: "6.85",
  },
  {
    id: "2",
    securityCode: "640JUPPL29",
    issuerName: "JAMNAGAR Utilities& Power",
    couponRate: "6.4",
    faceValue: "1000",
    ltp: "995.23",
    creditRating: "CRISIL AAA Stable",
    maturityDate: "29-09-2026",
    bidPrice: "993.73",
    askPrice: "995.23",
    yield: "7.85",
  },
  {
    id: "3",
    securityCode: "855STFC32",
    issuerName: "SHRIRAM TRANSPORT",
    couponRate: "8.55",
    faceValue: "1000",
    ltp: "1000",
    creditRating: "CRISIL AA+ STABLE / IND AA+ STABLE",
    maturityDate: "08-09-2032",
    bidPrice: "998.5",
    askPrice: "1000",
    yield: "8.54",
  },
  {
    id: "4",
    securityCode: "SUNDARAMFL25",
    issuerName: "SUNDARAM FINANCE",
    couponRate: "7.4",
    faceValue: "1000",
    ltp: "998.94",
    creditRating: "CRISIL AAA Stable / ICRAAAA Stable",
    maturityDate: "26-08-2025",
    bidPrice: "997.44",
    askPrice: "998.94",
    yield: "7.81",
  },
  {
    id: "5",
    securityCode: "920NFL23",
    issuerName: "NAVI FINSERV",
    couponRate: "9.2",
    faceValue: "2000",
    ltp: "2000.36",
    creditRating: "CRISIL A- Stable",
    maturityDate: "08-12-2023",
    bidPrice: "1997.79",
    askPrice: "1999.54",
    yield: "10.08",
  },
  {
    id: "6",
    securityCode: "895HDFC23",
    issuerName: "HDFC",
    couponRate: "8.95",
    faceValue: "1000",
    ltp: "1000.5",
    creditRating: "CARE AAA Stable / CRISIL AAA Stable",
    maturityDate: "21-03-2023",
    bidPrice: "998.75",
    askPrice: "1000.5",
    yield: "7.22",
  },
  {
    id: "7",
    securityCode: "KMIL25U4",
    issuerName: "KOTAK MAHINDRA",
    couponRate: "8",
    faceValue: "1000",
    ltp: "1000",
    creditRating: "CRISIL AAA / Stable",
    maturityDate: "04-11-2025",
    bidPrice: "997.7",
    askPrice: "1000",
    yield: "8",
  },
  {
    id: "8",
    securityCode: "850LTIFCL23L7",
    issuerName: "L T INFRASTRUCTURE",
    couponRate: "8.5",
    faceValue: "1000",
    ltp: "1000.17",
    creditRating: "CRISIL AAA STABLE / CARE AAA STABLE / IND AAA STABLE",
    maturityDate: "17-02-2023",
    bidPrice: "997.93",
    askPrice: "1000.23",
    yield: "7.3",
  },
  {
    id: "9",
    securityCode: "905HWEPL24",
    issuerName: "HERO WIND ENERGY",
    couponRate: "9.05",
    faceValue: "1000",
    ltp: "1000.71",
    creditRating: "CRISIL A+ / Stable",
    maturityDate: "28-03-2024",
    bidPrice: "999.46",
    askPrice: "1000.71",
    yield: "9.39",
  },
  {
    id: "10",
    securityCode: "815BOBPERPA",
    issuerName: "BANK OF BARODA",
    couponRate: "8.15",
    faceValue: "1000",
    ltp: "999.79",
    creditRating: "ICRA A Stable",
    maturityDate: "31-12-9999",
    bidPrice: "998.41",
    askPrice: "999.66",
    yield: "8.25",
  },
  {
    id: "11",
    securityCode: "8HDFCL32",
    issuerName: "HDFC",
    couponRate: "8",
    faceValue: "4000",
    ltp: "3999.9",
    creditRating: "CARE AAA Stable / CRISIL AAA / Stable",
    maturityDate: "27-07-2032",
    bidPrice: "3998.99",
    askPrice: "4000.24",
    yield: "7.94",
  },
  {
    id: "12",
    securityCode: "00LIDFL25",
    issuerName: "L&T INFRA",
    couponRate: "7.2",
    faceValue: "1000",
    ltp: "1023.62",
    creditRating: "CRISIL AAA STABLE / CARE AAA STABLE / IND AAA STABLE",
    maturityDate: "28-02-2025",
    bidPrice: "1022.37",
    askPrice: "1023.62",
    yield: "8.32",
  },
  {
    id: "13",
    securityCode: "730LTF23",
    issuerName: "L T FINANCE",
    couponRate: "7.3",
    faceValue: "3000",
    ltp: "2999.71",
    creditRating: "CRISIL AAA STABLE / CARE AAA STABLE / IND AAA STABLE",
    maturityDate: "08-09-2023",
    bidPrice: "2998.46",
    askPrice: "2999.71",
    yield: "7.58",
  },
  {
    id: "14",
    securityCode: "785TCHFL32A",
    issuerName: "TATA CAPITAL",
    couponRate: "7.85",
    faceValue: "1000",
    ltp: "999.9",
    creditRating: "CRISIL AAA STABLE / ICRA AAA STABLE",
    maturityDate: "13-09-2032",
    bidPrice: "997.65",
    askPrice: "999.9",
    yield: "7.85",
  },
  {
    id: "15",
    securityCode: "850LTINFFCL23",
    issuerName: "L & T INFRASTRUCTURE",
    couponRate: "8.5",
    faceValue: "2000",
    ltp: "2000.28",
    creditRating: "CRISIL AAA STABLE / CARE AAA STABLE / IND AAA STABLE",
    maturityDate: "17-03-2023",
    bidPrice: "1998.03",
    askPrice: "2000.28",
    yield: "7.6",
  },
  {
    id: "16",
    securityCode: "LTFINLTD2023",
    issuerName: "LT FINANCE",
    couponRate: "6.15",
    faceValue: "1000",
    ltp: "999.2118",
    creditRating: "CRISIL AAA STABLE / CARE AAA STABLE / IND AAA STABLE",
    maturityDate: "17-05-2023",
    bidPrice: "996.96",
    askPrice: "999.21",
    yield: "7.62",
  },
  {
    id: "17",
    securityCode: "00TCFSL22A",
    issuerName: "TATA CAPITAL",
    couponRate: "8.25",
    faceValue: "1000",
    ltp: "1034.62",
    creditRating: "CRISIL AAA STABLE / ICRA AAA STABLE",
    maturityDate: "05-12-2022",
    bidPrice: "1033.15",
    askPrice: "1034.62",
    yield: "7.5",
  },
  {
    id: "18",
    securityCode: "915IBL99",
    issuerName: "ICICI BANK",
    couponRate: "9.15",
    faceValue: "1000",
    ltp: "1000.86",
    creditRating: "CARE AAA Stable/ CRISIL AAA Stable",
    maturityDate: "20-06-2023",
    bidPrice: "999.38",
    askPrice: "1000.85",
    yield: "7.53",
  },
  {
    id: "19",
    securityCode: "717RIL22",
    issuerName: "RELIANCE INDUSTRIES",
    couponRate: "7.17",
    faceValue: "1000",
    ltp: "1007.19",
    creditRating: "CRISIL AAA Stable",
    maturityDate: "08-11-2022",
    bidPrice: "1005.72",
    askPrice: "1007.19",
    yield: "6",
  },
  {
    id: "20",
    securityCode: "840HCFSL32",
    issuerName: "HDFC",
    couponRate: "8.4",
    faceValue: "3000",
    ltp: "3002.2",
    creditRating: "CARE AAA Stable/ CRISIL AAA Stable",
    maturityDate: "30-06-2032",
    bidPrice: "3000.73",
    askPrice: "3002.2",
    yield: "8.05",
  },
]

export default live