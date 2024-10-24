# Idealista Scraper

You can use Idealista Scraper directly form APIFY platform [apify.com/igolaizola/idealista-scraper](https://apify.com/igolaizola/idealista-scraper)

## What does Idealista-Scraper do?

Idealista-Scraper enables you to easily get data from [idealista.com](https://idealista.com) for a very low price.

Idealista-Scraper can scrape:

Properties for sale in Spain, Italy, and Portugal
Properties for rent in Spain, Italy, and Portugal

## Why scrape idealista.com?

idealista.com has thousands of properties listed and is a great source of data for Real Estate professionals, investors, and anyone looking to buy or rent a property.
With Idealista-Scraper, you can get the data you need to make informed decisions about your next property purchase or rental.

Here are just some of the ways you could use that data:

- Analyze market trends and property price fluctuations in specific areas
- Monitor competitive pricing for real estate agencies and investors
- Generate leads for real estate businesses
- Research rental yields and investment opportunities in different neighborhoods

## How to scrape idealista.com

It's easy to scrape [idealista.com](https://idealista.com) with Idealista-Scraper. Just follow these few steps and you'll get your data in minutes:

1. Click on Try for free
2. Enter the city, operation and property types you want to scrape
3. Click on Run
4. When Idealista-Scraper has finished, preview or download your data from the Dataset tab

## How much will it cost to scrape idealista.com?

Apify provides you with $5 free usage credits every month on the [Apify Free plan](https://apify.com/pricing). You can try and test Idealista-Scraper for free with the Free plan for a limited time.

However, if you need to get more data regularly from idealista.com, you should get an Apify subscription. We recommend our [$49/month Personal plan](https://apify.com/pricing) - this plan covers the costs of Idealista-Scraper and numerous executions.

## Input Parameters

You just need to provide the type of data you want to scrape, the maximum number of items you want, and the location you want to search for.

For the location, you can use the city name or the Idealista Location ID. You can find the Location ID by using the [Idealista Location Search Tool](https://igolaizola.github.io/idealista-scraper).

| Parameter      | Options                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxItems`     | (optional) Default is 0, unlimited                                                                                                                                                                                                                                                                                                   | Maximum number of items to scrape                                                                                                                                   |
| `operation`    | • `sale`<br>• `rent`                                                                                                                                                                                                                                                                                                                 | Type of property listing to search for                                                                                                                              |
| `propertyType` | • `homes` - Residential properties<br>• `newDevelopments` - New construction<br>• `offices` - Office spaces<br>• `premises` - Commercial premises<br>• `garages` - Parking spaces<br>• `lands` - Land plots<br>• `storageRooms` - Storage units<br>• `buildings` - Complete buildings<br>• `bedrooms` - Individual rooms (rent only) | Type of property to search for                                                                                                                                      |
| `country`      | • `es` (Spain) <br> • `pt` (Portugal) <br> • `it` (Italy)                                                                                                                                                                                                                                                                            | Country where to search properties                                                                                                                                  |
| `location`     | • City name (e.g., "Madrid")<br>• Idealista Location ID (e.g., `0-EU-ES-28-07-001-079`)                                                                                                                                                                                                                                              | Location to search for properties<br>Use [Idealista Location Search Tool](https://igolaizola.github.io/idealista-scraper) to find the specific Location ID you need |

```json
{
  "maxItems": 100,
  "operation": "sale",
  "propertyType": "homes",
  "country": "es",
  "location": "0-EU-ES-26-02-002-061"
}
```

## Results

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
    "topHighlight": false
  }
]
```

## Proxy

Idealista-Scraper uses Apify Residential Proxies to prevent detection and IP blocking.
Apify Proxy is a rotating proxy service that provides a pool of IP addresses.
This way, Idealista-Scraper can make a large number of requests to idealista.com without being blocked.

## Is it legal to scrape idealista.com?

Note that personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. We also recommend that you read our blog post: [is web scraping legal?](https://blog.apify.com/is-web-scraping-legal/)
