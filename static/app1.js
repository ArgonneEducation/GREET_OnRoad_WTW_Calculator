// makePanel loads the dataset, drills down to data, filters the data to get emissions data
// and then creates a panel with the emissions data.

function makePanel(fuel, metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_OnRoad_WTW_Calculator/refs/heads/main/data/emissions.json").then(function (data) {
        let dataArray = data.emissions;

        // Filter data based on fuel and metric
        let currentfuel = dataArray.filter(d => d.id === fuel);
        if (currentfuel.length > 0) {
            let currentMetric = currentfuel[0][metric];
            d3.select(".WTP").text(`Well-to-pump: ${currentMetric.WTP}`);
            d3.select(".PTW").text(`Pump-to-wake: ${currentMetric.PTW}`);
            d3.select(".WTW").text(`Well-to-wake: ${currentMetric.WTW}`);
            d3.select(".UNITS").html(`Units: ${currentMetric.units.replace(/CO2e/g, 'CO<sub>2</sub>e')}`);
        } else {
            console.error("fuel or metric not found in data.");
        }
    });

};
// Update the bar chart with data
function makeBarChart(fuel, metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_OnRoad_WTW_Calculator/refs/heads/main/data/emissions.json").then(function (data) {
        let dataArray = data.emissions;

        // Filter data based on fuel and metric
        let currentfuel = dataArray.filter(d => d.id === fuel);
        if (currentfuel.length > 0) {
            let emiss_values = currentfuel[0][metric];

            // Create the bar chart
            let trace1 = {
                x: [emiss_values.WTP],
                y: ['WTP'],
                type: 'bar',
                name: 'WTP',
                orientation: 'h',
                marker: { color: 'A5CFED', width: 1 }
            };
            let trace2 = {
                x: [emiss_values.PTW],
                y: ['PTW'],
                type: 'bar',
                name: 'PTW',
                orientation: 'h',
                marker: { color: 'F6665E', width: 1 }
            };
            let trace3 = {
                x: [emiss_values.WTW],
                y: ['WTW = WTP+PTW'],
                type: 'bar',
                name: 'WTW',
                orientation: 'h',
                marker: { color: '05AD59', width: 1 }
            };

            let plot = [trace3, trace2, trace1];
            let layout = {
                title: 'Emissions for Selected fuel and Metric',
                barmode: 'overlay',
                xaxis: { title: emiss_values.units.replace(/CO2e/g, 'CO<sub>2</sub>e') },
                yaxis: { title: 'Emissions by LCA Stage' },
                width: 500
            };

            Plotly.newPlot('bar', plot, layout);
        } else {
            console.error("fuel or metric not found in data.");
        }
    });
};
// Populate dropdown menus and initialize the page
function init() {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_OnRoad_WTW_Calculator/refs/heads/main/data/emissions.json").then(function (data) {
        // Populate fuel dropdown from the list in the json file
        let fuelDropdown = d3.select("#selfuel");
        let fuels = data.fuels;
        fuels.forEach(fuel => {
            fuelDropdown.append("option").text(fuel).property("value", fuel);
        });

        // Populate metric dropdown from the list in the json file
        let metricDropdown = d3.select("#selMetric");
        let metrics = data.metrics;
        metrics.forEach(metric => {
            let displayText = metric.replace(/CO2e/g, 'CO<sub>2</sub>e');
            metricDropdown.append("option").html(displayText).property("value", metric);
        });

        // Initialize with the first fuel and metric
        let initialfuel = fuels[0];
        let initialMetric = metrics[0];
        makePanel(initialfuel, initialMetric);
        makeBarChart(initialfuel, initialMetric);
    });
}

// Handle fuel dropdown change, called whenever a new fuel is selected, returns the new fuel value and the current metric value
// and calls makePanel and makeBarChart with the new values
function fuelChanged(fuel) {
    let metric = d3.select("#selMetric").property("value"); // Get the current metric value
    makePanel(fuel, metric);
    makeBarChart(fuel, metric);
}

// Handle metric dropdown change
function metricChanged(metric) {
    let fuel = d3.select("#selfuel").property("value"); // Get the current fuel value
    makePanel(fuel, metric);
    makeBarChart(fuel, metric);
}


init(); // call init function to load the data and create the dropdown list.
