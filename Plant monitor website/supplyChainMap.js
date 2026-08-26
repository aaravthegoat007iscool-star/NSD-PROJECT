const CROPS = {
  rice: {
    name: "Rice",
    color: "#2f7d4a",
    origins: ["ludhiana", "indore", "patna", "guntur"],
    production: "Punjab, Haryana, Madhya Pradesh & Andhra Pradesh",
  },
  wheat: {
    name: "Wheat",
    color: "#b7791f",
    origins: ["ludhiana", "indore", "patna"],
    production: "Punjab, Haryana, MP & Uttar Pradesh",
  },
  sugarcane: {
    name: "Sugarcane",
    color: "#4f8f45",
    origins: ["latur", "indore", "guntur"],
    production: "Maharashtra, MP & Andhra Pradesh",
  },
  pulses: {
    name: "Pulses",
    color: "#8a5a44",
    origins: ["latur", "indore", "patna"],
    production: "Maharashtra, MP, Rajasthan & Bihar",
  },
  cotton: {
    name: "Cotton",
    color: "#9b4d73",
    origins: ["rajkot", "latur", "guntur"],
    production: "Gujarat, Maharashtra & Andhra Pradesh",
  },
  soybean: {
    name: "Soybean",
    color: "#6b7d32",
    origins: ["indore", "latur", "rajkot"],
    production: "Madhya Pradesh, Maharashtra & Gujarat",
  },
};

const ORIGINS = {
  ludhiana: {
    name: "Ludhiana Grain Mandi",
    city: "Ludhiana",
    coordinates: [30.901, 75.8573],
    state: "Punjab",
    volume: "High-volume northern grain & rice hub",
  },
  indore: {
    name: "Indore Anaj Mandi",
    city: "Indore",
    coordinates: [22.7196, 75.8577],
    state: "Madhya Pradesh",
    volume: "Central India primary aggregation hub",
  },
  latur: {
    name: "Latur Krishi Upaj Mandi",
    city: "Latur",
    coordinates: [18.4088, 76.5604],
    state: "Maharashtra",
    volume: "Marathwada pulse and sugarcane hub",
  },
  rajkot: {
    name: "Rajkot APMC Mandi",
    city: "Rajkot",
    coordinates: [22.3039, 70.8022],
    state: "Gujarat",
    volume: "Saurashtra cotton and oilseed hub",
  },
  patna: {
    name: "Patna APMC Market",
    city: "Patna",
    coordinates: [25.5941, 85.1376],
    state: "Bihar",
    volume: "Eastern grain and pulse feeder hub",
  },
  guntur: {
    name: "Guntur Agricultural Market",
    city: "Guntur",
    coordinates: [16.3067, 80.4365],
    state: "Andhra Pradesh",
    volume: "Southern commercial crop hub",
  },
};

const DESTINATIONS = {
  delhi: {
    name: "Delhi",
    coordinates: [28.6139, 77.209],
    demand: "National wholesale and retail demand",
  },
  mumbai: {
    name: "Mumbai",
    coordinates: [19.076, 72.8777],
    demand: "West-coast consumer and export gateway",
  },
  bengaluru: {
    name: "Bengaluru",
    coordinates: [12.9716, 77.5946],
    demand: "Southern urban and food-service demand",
  },
  kolkata: {
    name: "Kolkata",
    coordinates: [22.5726, 88.3639],
    demand: "Eastern metro distribution demand",
  },
  chennai: {
    name: "Chennai",
    coordinates: [13.0827, 80.2707],
    demand: "Southeast coastal distribution demand",
  },
};

const ROUTES = {
  "ludhiana-delhi": {
    highway: "NH 44",
    distance: 310,
    loss: 3.2,
    freight: "Road 78% · Rail 22%",
    coordinates: [
      [30.901, 75.8573],
      [30.6, 76.8],
      [29.8, 77.2],
      [28.6139, 77.209],
    ],
  },
  "ludhiana-kolkata": {
    highway: "NH 19",
    distance: 1480,
    loss: 7.8,
    freight: "Road 64% · Rail 36%",
    coordinates: [
      [30.901, 75.8573],
      [29.2, 77.7],
      [27.2, 81.6],
      [24.6, 84.0],
      [22.5726, 88.3639],
    ],
  },
  "indore-mumbai": {
    highway: "NH 48",
    distance: 585,
    loss: 4.5,
    freight: "Road 82% · Rail 18%",
    coordinates: [
      [22.7196, 75.8577],
      [21.7, 74.5],
      [20.6, 73.8],
      [19.076, 72.8777],
    ],
  },
  "indore-delhi": {
    highway: "NH 52",
    distance: 810,
    loss: 5.1,
    freight: "Road 76% · Rail 24%",
    coordinates: [
      [22.7196, 75.8577],
      [24.5, 76.2],
      [26.0, 76.8],
      [28.6139, 77.209],
    ],
  },
  "indore-bengaluru": {
    highway: "NH 44",
    distance: 1110,
    loss: 6.4,
    freight: "Road 71% · Rail 29%",
    coordinates: [
      [22.7196, 75.8577],
      [20.8, 77.4],
      [17.9, 78.5],
      [15.3, 77.8],
      [12.9716, 77.5946],
    ],
  },
  "latur-mumbai": {
    highway: "NH 65",
    distance: 480,
    loss: 4.1,
    freight: "Road 88% · Rail 12%",
    coordinates: [
      [18.4088, 76.5604],
      [18.5, 75.2],
      [19.0, 73.8],
      [19.076, 72.8777],
    ],
  },
  "latur-bengaluru": {
    highway: "NH 48",
    distance: 690,
    loss: 5.7,
    freight: "Road 84% · Rail 16%",
    coordinates: [
      [18.4088, 76.5604],
      [16.9, 76.7],
      [14.8, 77.2],
      [12.9716, 77.5946],
    ],
  },
  "rajkot-mumbai": {
    highway: "NH 48",
    distance: 720,
    loss: 5.0,
    freight: "Road 79% · Rail 21%",
    coordinates: [
      [22.3039, 70.8022],
      [21.7, 71.8],
      [20.7, 72.4],
      [19.076, 72.8777],
    ],
  },
  "rajkot-delhi": {
    highway: "NH 27",
    distance: 980,
    loss: 6.2,
    freight: "Road 73% · Rail 27%",
    coordinates: [
      [22.3039, 70.8022],
      [24.0, 72.0],
      [26.2, 74.6],
      [28.6139, 77.209],
    ],
  },
};

class SupplyChainMapManager {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = options;
    this.map = null;
    this.layers = { hubs: null, routes: null };
    this.activeRoute = null;
    this.boundHandlers = [];
    this.routeRequestId = 0;
    this.boundResize = null;
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container) return this;
    if (typeof L === "undefined") {
      container.innerHTML =
        '<p class="map-empty-state">The map could not load. Check your internet connection and reload the page.</p>';
      return this;
    }

    this.map = L.map(container, {
      zoomControl: true,
      scrollWheelZoom: false,
    }).setView(
      this.options.center || [20.5937, 78.9629],
      this.options.zoom || 5,
    );
    // Using OpenStreetMap Voyager / Detailed tiles for high detail road network visualization
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      },
    ).addTo(this.map);
    this.layers = { hubs: L.layerGroup(), routes: L.layerGroup() };
    this.layers.hubs.addTo(this.map);
    this.layers.routes.addTo(this.map);

    this.cropSelect = document.getElementById("map-crop-select");
    this.sourceSelect = document.getElementById("map-source-select");
    this.destinationSelect = document.getElementById("map-destination-select");
    this.resetButton = document.getElementById("map-reset-button");
    this.cropSelect?.addEventListener("change", () =>
      this.loadCrop(this.cropSelect.value),
    );
    this.sourceSelect?.addEventListener("change", () =>
      this.calculateSelectedRoute(),
    );
    this.destinationSelect?.addEventListener("change", () =>
      this.calculateSelectedRoute(),
    );
    this.resetButton?.addEventListener("click", () => this.reset());
    this.boundHandlers = [
      this.cropSelect,
      this.sourceSelect,
      this.destinationSelect,
      this.resetButton,
    ];
    this.boundResize = () => this.syncMapHeight();
    window.addEventListener("resize", this.boundResize);

    this.loadCrop(this.cropSelect?.value || "rice");
    return this;
  }

  loadCrop(cropId) {
    const crop = CROPS[cropId] || CROPS.rice;
    this.currentCropId = cropId;
    this.populateSourceSelect(crop);
    this.layers.hubs.clearLayers();
    this.layers.routes.clearLayers();
    this.activeRoute = null;
    this.updateMetricsPanel(null);

    crop.origins.forEach((originId) => {
      const origin = ORIGINS[originId];
      const marker = L.marker(origin.coordinates, {
        icon: this.markerIcon("mandi"),
      });
      marker.bindPopup(
        `<strong>${origin.name}</strong><br>${origin.state}<br>${origin.volume}<br><small>Primary crop: ${crop.name}</small>`,
      );
      marker.addTo(this.layers.hubs);
      L.circle(origin.coordinates, {
        radius: 25000,
        color: crop.color,
        fillColor: crop.color,
        fillOpacity: 0.08,
        weight: 1,
      }).addTo(this.layers.hubs);
    });

    Object.values(DESTINATIONS).forEach((destination) => {
      const marker = L.marker(destination.coordinates, {
        icon: this.markerIcon("metro"),
      });
      marker.bindPopup(
        `<strong>${destination.name}</strong><br>${destination.demand}<br><small>Receiving: ${crop.name}</small>`,
      );
      marker.addTo(this.layers.hubs);
    });
    this.calculateSelectedRoute();
  }

  async calculateRoute(originId, destinationId) {
    if (!this.map) return null;
    const origin = ORIGINS[originId];
    const destination = DESTINATIONS[destinationId];
    const storedRoute = ROUTES[`${originId}-${destinationId}`] || {
      highway: "NH 44",
      distance: Math.round(
        this.map.distance(origin.coordinates, destination.coordinates) / 1000,
      ),
      loss: 6.8,
      freight: "Road 75% · Rail 25%",
      roadNames: ["NH 44"],
      coordinates: [
        origin.coordinates,
        [
          (origin.coordinates[0] + destination.coordinates[0]) / 2,
          (origin.coordinates[1] + destination.coordinates[1]) / 2,
        ],
        destination.coordinates,
      ],
    };
    const requestId = ++this.routeRequestId;
    let routeData = storedRoute;

    this.layers.routes.clearLayers();
    this.updateMetricsPanel({ loading: true });

    try {
      const coordinates = `${origin.coordinates[1]},${origin.coordinates[0]};${destination.coordinates[1]},${destination.coordinates[0]}`;
      const routingUrl =
        this.options.routingUrl ||
        `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&steps=true&geometries=geojson`;
      const response = await fetch(routingUrl);
      if (response.ok) {
        const result = await response.json();
        const roadRoute = result.routes?.[0];
        if (roadRoute?.geometry?.coordinates?.length) {
          routeData = {
            ...storedRoute,
            distance: Math.round(roadRoute.distance / 1000),
            roadNames: [
              ...new Set(
                roadRoute.legs
                  ?.flatMap((leg) => leg.steps?.map((step) => step.name) || [])
                  .filter(Boolean) || [],
              ),
            ].slice(0, 8),
            coordinates: roadRoute.geometry.coordinates.map(
              ([longitude, latitude]) => [latitude, longitude],
            ),
          };
        }
      }
    } catch {
      routeData = storedRoute;
    }

    if (requestId !== this.routeRequestId) return null;
    this.layers.routes.clearLayers();
    const route = L.polyline(routeData.coordinates, {
      color: this.options.routeColor || "#c86d3b",
      weight: 5,
      opacity: 0.9,
      dashArray: "12 10",
      className: "supply-chain-route",
    }).addTo(this.layers.routes);
    route.bindPopup(
      `<strong>${origin.city} to ${destination.name}</strong><br>${routeData.highway} · ${routeData.distance} km<br><small>${CROPS[this.currentCropId].name} corridor</small>`,
    );
    this.activeRoute = route;
    routeData.originCity = origin.city;
    routeData.destinationCity = destination.name;
    this.updateMetricsPanel(routeData);
    this.map.fitBounds(route.getBounds(), { padding: [28, 28] });
    this.syncMapHeight();
    return route;
  }

  updateMetricsPanel(routeData) {
    const panel = document.getElementById("map-route-metrics");
    if (!panel) return;
    if (!routeData) {
      panel.innerHTML =
        '<p class="map-empty-state">Choose a crop and destination to inspect a corridor.</p>';
      return;
    }
    if (routeData.loading) {
      panel.innerHTML =
        '<p class="map-empty-state">Calculating the road route...</p>';
      return;
    }
    const roadNames = routeData.roadNames?.length
      ? routeData.roadNames
      : [routeData.highway];
    const roadSequence = roadNames
      .map((roadName, index) => `<span><b>${index + 1}</b>${roadName}</span>`)
      .join("");
    panel.innerHTML = `<div class="map-route-title"><strong>${routeData.originCity || "Source"} to ${routeData.destinationCity || "Destination"}</strong><span>${CROPS[this.currentCropId || "rice"].name} corridor</span></div><div class="map-metric"><span>Road distance</span><strong>${routeData.distance.toLocaleString()} km</strong></div><div class="map-metric map-road-metric"><span>Road sequence</span><div class="map-road-list">${roadSequence}</div></div><div class="map-metric"><span>Primary highway</span><strong>${routeData.highway}</strong></div><div class="map-metric"><span>Transit loss</span><strong>${routeData.loss}%</strong></div><div class="map-metric"><span>Freight mode split</span><strong>${routeData.freight}</strong></div>`;
    this.syncMapHeight();
  }

  syncMapHeight() {
    const sidebar = document.getElementById("map-sidebar");
    const canvas = document.getElementById(this.containerId);
    if (!sidebar || !canvas) return;
    if (window.innerWidth >= 600) {
      canvas.style.height = `${sidebar.offsetHeight}px`;
      this.map?.invalidateSize();
    } else {
      canvas.style.height = "";
    }
  }

  destroy() {
    this.boundHandlers.forEach((element) =>
      element?.replaceWith(element.cloneNode(true)),
    );
    this.boundHandlers = [];
    if (this.boundResize)
      window.removeEventListener("resize", this.boundResize);
    this.boundResize = null;
    this.map?.remove();
    this.map = null;
    this.layers = { hubs: null, routes: null };
  }

  reset() {
    if (!this.map) return;
    const crop = CROPS[this.currentCropId || "rice"];
    this.populateSourceSelect(crop);
    this.destinationSelect.value = "mumbai";
    this.map.setView(
      this.options.center || [20.5937, 78.9629],
      this.options.zoom || 5,
    );
    this.loadCrop(this.currentCropId || "rice");
  }

  calculateSelectedRoute() {
    const crop = CROPS[this.currentCropId || "rice"];
    const destinationId = this.destinationSelect?.value || "mumbai";
    const originId = this.sourceSelect?.value || crop.origins[0];
    if (originId) this.calculateRoute(originId, destinationId);
  }

  populateSourceSelect(crop) {
    if (!this.sourceSelect) return;
    this.sourceSelect.innerHTML = crop.origins
      .map(
        (originId) =>
          `<option value="${originId}">${ORIGINS[originId].city}</option>`,
      )
      .join("");
  }

  markerIcon(type) {
    const colorClass =
      type === "mandi" ? "map-marker-mandi" : "map-marker-metro";
    return L.divIcon({
      className: "map-marker-wrapper",
      html: `<span class="map-marker ${colorClass}"></span>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SupplyChainMapManager("map-canvas").init();
});
