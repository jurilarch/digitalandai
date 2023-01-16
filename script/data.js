const coffees = {
    "coffeshop": [
        {
            "name":              "Caffè Lab – Etiopia",
            "image":             "DSC06867.png",
            "country":           "Ethiopia",
            "region":            "Bona Zuria/Sidama",
            "sea_level":         "2.190m",
            "sca":               "87",
            "flavours":   [
                "White Grapes",
                "Orange",
                "Peach"
            ],
            "appointment_label": "Make an appointment",
            "colors": "caffe-lab"
        },
        {
            "name":              "Caffè Lab – Costarica",
            "image":             "DSC06868.png",
            "country":           "Entre Rios",
            "region":            "Bona Zuria/Sidama",
            "sea_level":         "21.100 - 1.400m",
            "sca":               "85.75",
            "flavours":   [
                "Citrus Fruits",
                "Cherry",
                "Caramel"
            ],
            "appointment_label": "Schedule a ☕ date",
            "colors": "caffe-lab"
        },
        
    ]
};

function coffeeFilter(coffee, filter) {
    return coffee.name.indexOf(filter) === -1;
}

function loadCoffee(filter=null) {
    for (const coffee of coffees.coffeshop) {
        if (filter != null && coffeeFilter(coffee, filter))
            continue;
        var block = template.cloneNode(true);
        const tags = block.getElementsByClassName("tags")[0];
        const flavour_temp = tags.children[0];
        flavour_temp.remove();
        for (const flavour of coffee.flavours) {
            var flavour_cpy = flavour_temp.cloneNode(true);
            flavour_cpy.innerHTML = flavour_cpy.innerHTML.replace("$flavour", flavour);
            tags.appendChild(flavour_cpy);
        }
        var raw = block.outerHTML;
        for (const [key, value] of Object.entries(coffee)) {
            raw = raw.replace("$"+key, value);
        }
        coffeshop.appendChild(block);
        block.outerHTML = raw;
    }
}

var template = null;
var coffeshop = null;

(function(){
    template = document.getElementById("coffee-template");
    template.remove();
    coffeshop = document.getElementById("coffeeshop");
    loadCoffee();
})();