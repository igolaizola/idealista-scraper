# Idealista Scraper

> [!TIP]
> You can use Idealista Scraper directly from APIFY platform [apify.com/igolaizola/idealista-scraper](https://apify.com/igolaizola/idealista-scraper?fpr=ig)

## 🤖 What does Idealista-Scraper do?

Idealista-Scraper enables you to easily get data from [idealista.com](https://idealista.com) for a very low price.

It can scrape:

- 🏘️ Properties for **sale** in Spain, Italy, Portugal, and France
- 🔑 Properties for **rent** in Spain, Italy, Portugal, and France
- 🧭 Large result sets with the default iterator, continuing beyond the old 2500-result page limit

## 💡 Why scrape idealista.com?

idealista.com has thousands of properties listed and is a great source of data for Real Estate professionals, investors, and anyone looking to buy or rent a property.
With Idealista-Scraper, you can get the data you need to make informed decisions about your next property purchase or rental.

Here are just some of the ways you could use that data:

- 📈 Analyze market trends and property price fluctuations in specific areas
- 👀 Monitor competitive pricing for real estate agencies and investors
- 🎯 Generate leads for real estate businesses
- 📊 Research rental yields and investment opportunities in different neighborhoods

## 🚀 How to scrape idealista.com

It's easy to scrape [idealista.com](https://idealista.com) with Idealista-Scraper. Just follow these few steps and you'll get your data in minutes:

1. Click **Try for free**
2. Enter the **operation**, **property type**, and **country**. Optionally set a named **location** or a coordinate radius for a narrower scrape.
3. (Optional) Set filters like price, size, bedrooms, etc.
4. Click **Run**
5. When the run finishes, preview or download your data from the **Dataset** tab
6. Click **All fields** to view all available data for each property and choose json or csv format.

## ⚠️ Important

- **Large scrapes**: The default iterator can continue past Idealista's 2500-result page window, so you can run big scrapes without splitting the location manually.
- **Fetch details** (`fetchDetails`): Adds **1 extra request per property** and is **\~50× slower overall**.
- **Fetch stats** (`fetchStats`): Adds **1 extra request per property** and is **\~50× slower overall**. Produces a `_stats` field per property.

## 💳 How much will it cost to scrape idealista.com?

Apify provides you with \$5 free usage credits every month on the [Apify Free plan](https://apify.com/pricing?fpr=ig). You can try and test Idealista-Scraper for free with the Free plan for a limited time.

However, if you need to get more data regularly from idealista.com, you should get an Apify subscription. We recommend our [\$29/month Personal plan](https://apify.com/pricing) – this plan covers the costs of Idealista-Scraper and numerous executions.

## 📝 Input Parameters

You can provide either a **city name** or an **Idealista Location ID** for `location`. Leave `location` empty to scrape every province in the selected country. Use `locations` when you want to search multiple locations in one run; when `locations` has at least one value, `location` is ignored. Alternatively, provide `postalCodes` to let Idealista resolve and search multiple postal-code areas in order, or provide `latitude`, `longitude`, and `distanceKm` to search freely around a point. `postalCodes` takes precedence over coordinates and named-location fields, and `maxItems` applies globally. Find specific Location IDs with the **[Idealista Location Search Tool](https://igolaizola.github.io/idealista-scraper)**.

If you already know the listing codes, you can set `propertyCodes` to fetch those properties directly. When `propertyCodes` is provided, `location`, `fetchDetails`, and all filtering options are ignored. The actor always returns `_details` for each code (and `_stats` if `fetchStats` is enabled).

### Required

| Parameter      | Options / Example                                                                                              | Description                        |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `operation`    | `sale` \| `rent`                                                                                               | Listing operation                  |
| `propertyType` | `newDevelopments`, `homes`, `bedrooms`, `vacationRentals`, `garages`, `storageRooms`, `offices`, `premises`, `transfers`, `lands`, `buildings` | Type of property                   |
| `country`      | `es` \| `pt` \| `it` \| `fr`                                                                                  | Country                            |
| `location`     | `""`, `"Madrid"`, or `"0-EU-ES-28-07-001-079"`                                                                  | Empty = all country provinces; otherwise city name or Idealista Location ID. Ignored when `locations` has at least one value. |

`bedrooms` and `vacationRentals` support only the `rent` operation. `transfers` supports only `sale`.

### Core options

| Parameter         | Type / Options                                                                                                                                                                                         | Description                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `propertyCodes`   | Array of strings, e.g. `["12345678","87654321"]`                                                                                                                                                       | Fetch specific properties by code. Overrides location and filters; always populates `_details`.                |
| `locations`       | Array of strings, e.g. `["Madrid", "Barcelona", "0-EU-ES-46"]`                                                                                                                                        | Search multiple locations in order instead of using `location` when the list is non-empty. `maxItems` applies globally across all locations. |
| `postalCodes`     | Array of strings, e.g. `["28013", "28014"]`                                                                                                                                                   | Resolve and search postal codes in order. Takes precedence over other location modes; `maxItems` applies globally.                              |
| `latitude` / `longitude` | Number, e.g. `40.4168` / `-3.7038`                                                                                                                                                              | Center point for coordinate search. Both values must be supplied and take precedence over `location` and `locations`.                         |
| `distanceKm`      | Integer (default **20**)                                                                                                                                                                               | Radius around the coordinate point in kilometers.                                                                                            |
| `maxItems`        | Integer (default **50**, `0` = unlimited)                                                                                                                                                              | Maximum results to save. Large scrapes use the default iterator to continue past the 2500-result page window.  |
| `sortBy`          | `relevance`, `closest`, `lowestPrice`, `highestPrice`, `mostRecent`, `leastRecent`, `highestPriceReduction`, `lowestPriceM2`, `highestPriceM2`, `biggest`, `smallest`, `highestFloors`, `lowestFloors` | Sorting method for results. For very large scrapes, the actor may use price order internally so the default iterator can keep collecting results safely. |
| `splitLocation`   | Boolean (default `false`)                                                                                                                                                                              | Legacy compatibility mode. Splits large searches into sub-locations instead of using the default iterator.      |
| `fetchDetails`    | Boolean (default `false`)                                                                                                                                                                              | Fetch a detailed page per property → adds `_details`. **Much slower & costlier**.                       |
| `fetchStats`      | Boolean (default `false`)                                                                                                                                                                              | Fetch per-listing statistics → adds `_stats`. **1 extra request per property, \~50× slower overall**.   |
| `minPrice`        | **String** (default `"0"`) or preset steps: `"500"`–`"3000"` (rent) and `"50000"`–`"4000000"` (sale)                                                                                                   | Minimum price (`"0"` = any)                                                                                    |
| `maxPrice`        | **String** (default `"0"`) or preset steps: `"500"`–`"3000"` (rent) and up to `"4000000"` (sale)                                                                                                       | Maximum price (`"0"` = any)                                                                                    |
| `minSize`         | **String** (default `"0"`) or preset steps (m²): `"60"`, `"80"`, `"100"`, …, `"300"`                                                                                                                   | Minimum size in m² (`"0"` = any)                                                                               |
| `maxSize`         | **String** (default `"0"`) or preset steps (m²): `"60"`, `"80"`, `"100"`, …, `"300"`                                                                                                                   | Maximum size in m² (`"0"` = any)                                                                               |
| `publicationDate` | `""` (any), `Y` (last 48h, only for `sale` operation), `T` (last 24h, only for `rent` operation), `W` (last week), `M` (last month)                                                                    | Filter by publication date                                                                                     |

### Location modes

Use `location` for one city, province, or Idealista Location ID. Use `locations` for a curated list of places in one run. Use coordinates for a radius around an arbitrary point. Leave all location inputs empty to scrape every province in the selected country.

**Coordinate radius**

Coordinates take precedence over `location` and `locations`. Idealista receives a circular search shape generated around the point.

```json
{
  "country": "es",
  "latitude": 40.4168,
  "longitude": -3.7038,
  "distanceKm": 10,
  "maxItems": 100
}
```

**Postal code**

```json
{
  "country": "es",
  "postalCodes": ["28013", "28014"],
  "maxItems": 100
}
```

**One location**

```json
{
  "country": "es",
  "location": "Madrid"
}
```

**Multiple locations**

When `locations` has at least one value, `location` is ignored. The actor searches each entry in order, and `maxItems` applies globally across the full run.

```json
{
  "country": "es",
  "location": "Madrid",
  "locations": ["Barcelona", "Valencia", "0-EU-ES-29"],
  "maxItems": 5000
}
```

**All country provinces**

Leave `location` empty and omit `locations` to scrape every province in `country`. This is useful for country-wide market research, lead generation, and large exports.

```json
{
  "country": "pt",
  "location": "",
  "maxItems": 0
}
```

### Large scrapes and sorting

The actor uses the **default iterator** for large scrapes. This is the recommended mode and lets the scraper continue beyond Idealista's standard 2500-result page window, including when `maxItems` is set above 2500 or `0` for unlimited.

For very large runs, the actor may use price order internally so it can keep moving through all available results without losing properties at the page limit. If you enable `splitLocation`, the actor switches back to the older sub-location strategy. Use `splitLocation` only for backward compatibility with previous workflows.

### Advanced filters

- `rentalTypes` (array, only for `rent`): `["longTerm","seasonal"]` (long-term residential, short-term)
- `bedrooms` (array): `["studio","1","2","3","4"]` (leave empty for any)
- `bathrooms` (array): `["1","2","3"]` (leave empty for any)
- `homeType` (array): `["flat","penthouse","duplex","detachedHouse","semiDetachedHouse","terracedHouse","countryHouse","apartment","villa","loft"]`
- `condition` (array): `["newDevelopment","good","renew"]`
- `propertyStatus` (array): `["bareOwnership","tenanted","illegallyOccupied","free"]`
- `floor` (array): `["topFloor","intermediateFloor","groundFloor"]`

### Amenities & features (booleans)

`bankOffer`, `airConditioning`, `fittedWardrobes`, `lift`, `balcony`, `terrace`, `exterior`, `garage`, `garden`, `swimmingPool`, `storageRoom`, `accessible`, `seaViews`, `luxury`, `plan` (floor plan), `virtualTour`.

### Agency filter

- `agency` (string): Filter properties by agency. Use the slug from the agency page URL, e.g., `engel-volkers` in `https://www.idealista.com/pro/engel-volkers/`.

### Example input

```json
{
  "maxItems": 100,
  "operation": "sale",
  "propertyType": "homes",
  "country": "es",
  "location": "0-EU-ES-28-07-001-079",
  "locations": [],
  "sortBy": "mostRecent",
  "fetchDetails": false,
  "fetchStats": false,
  "minPrice": 200000,
  "maxPrice": 500000,
  "minSize": 80,
  "maxSize": 120,
  "publicationDate": "W",
  "bedrooms": ["2", "3"],
  "bathrooms": ["2"],
  "homeType": ["flat", "penthouse"],
  "condition": ["newDevelopment", "good"],
  "propertyStatus": [],
  "floor": ["intermediateFloor"],
  "bankOffer": false,
  "airConditioning": true,
  "fittedWardrobes": true,
  "lift": true,
  "balcony": false,
  "terrace": false,
  "exterior": true,
  "garage": true,
  "garden": false,
  "swimmingPool": false,
  "storageRoom": true,
  "accessible": false,
  "seaViews": false,
  "luxury": false,
  "plan": false,
  "virtualTour": false
}
```

## 📊 Results

You'll get a list of property objects similar to Idealista's listing data.
If `fetchDetails: true`, each item includes an extra field: **`_details`** with detailed page data.
If `fetchStats: true`, each item includes an extra field: **`_stats`** with per-listing statistics.

```json
[
  {
    "propertyCode": "106316721",
    "thumbnail": "https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/46/12/06/1279185415.webp",
    "externalReference": "21",
    "numPhotos": 23,
    "floor": "3",
    "price": 105000,
    "priceInfo": {
      "price": {
        "amount": 105000
      }
    },
    "propertyType": "flat",
    "operation": "sale",
    "size": 78,
    "exterior": true,
    "rooms": 3,
    "bathrooms": 1,
    "address": "plaza Labradores, 9 --11",
    "province": "La Rioja",
    "municipality": "Ezcaray",
    "district": "",
    "country": "es",
    "locationId": "0-EU-ES-26-02-002-061",
    "latitude": 42.3203813,
    "longitude": -3.0147614,
    "showAddress": true,
    "url": "https://www.idealista.com/inmueble/106316721/",
    "description": "Ezcaray ofrece algunas de las mejores vistas a las montañas en La Rioja, convirtiéndolo en un destino ideal para los amantes de la naturaleza y la aventura.     Desde esta vivienda lo puedes comprobar! Gracias a su altura y orientación vas a poder disfrutar de las mejores vistas de Ezcaray.     Tiene tres habitaciones bien orientadas, una de ellas con mirador y balcón orientados al sur, salón, cocina amplia y baño completo.     Calefacción con calefactor de leña e instalación de radiadores.     Merece la pena llamar y concertar una visita!",
    "hasVideo": true,
    "status": "renew",
    "newDevelopment": false,
    "favourite": false,
    "newProperty": false,
    "multimedia": {
      "images": [
        {
          "url": "https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/46/12/06/1279185415.webp",
          "tag": "views"
        },
        {
          "url": "https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/56/0f/43/1279185423.webp",
          "tag": "kitchen"
        },
        {
          "url": "https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/1c/91/45/1279185430.webp",
          "tag": "livingRoom"
        },
        {
          "url": "https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/4d/03/c6/1279185433.webp",
          "tag": "bedroom"
        }
      ],
      "virtual3DTours": []
    },
    "contactInfo": {
      "commercialName": "INMOBILIARIA  LA ZALAYA ",
      "contactName": "INMOBILIARIA  LA ZALAYA ",
      "userType": "professional",
      "contactMethod": "all",
      "phone1": {
        "phoneNumber": "941776986",
        "formattedPhone": "941 77 69 86",
        "prefix": "34",
        "phoneNumberForMobileDialing": "+34941776986",
        "nationalNumber": true
      },
      "agencyLogo": "https://st3.idealista.com/9e/99/38/inmobiliaria-la-zalaya.gif",
      "micrositeShortName": "inmobiliaria-la-zalaya",
      "totalAds": 0
    },
    "hasLift": false,
    "parkingSpace": {
      "hasParkingSpace": false,
      "isParkingSpaceIncludedInPrice": false
    },
    "priceByArea": 1346,
    "features": {
      "hasSwimmingPool": false,
      "hasTerrace": false,
      "hasAirConditioning": false,
      "hasBoxRoom": false,
      "hasGarden": false
    },
    "detailedType": {
      "typology": "flat"
    },
    "suggestedTexts": {
      "subtitle": "",
      "title": "Piso en plaza Labradores, 9 --11"
    },
    "hasPlan": false,
    "has3DTour": false,
    "has360": false,
    "hasStaging": false,
    "isOnlineBookingActive": false,
    "ribbons": [],
    "topNewDevelopment": false,
    "topPlus": false,
    "preferenceHighlight": false,
    "urgentVisualHighlight": false,
    "visualHighlight": false,
    "topHighlight": false,
    "_details": {
      /* present only when fetchDetails=true */
    },

    "_stats": {
      /* present only when fetchStats=true */
      "views": { "value": 6539, "text": "6,539 views" },
      "contactMails": { "value": 18, "text": "18 email contacts" },
      "sentToFriend": { "value": 1, "text": "1 time sent to friends" },
      "favorites": { "value": 266, "text": "saved as favourite 266 times" }
    }
  }
  ...
]
```

## ⚖️ Is it legal to scrape idealista.com?

Note that personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. We also recommend that you read our blog post: [is web scraping legal?](https://blog.apify.com/is-web-scraping-legal/)
