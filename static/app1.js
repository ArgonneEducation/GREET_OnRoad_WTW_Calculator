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
            d3.select(".PTW").text(`Pump-to-wheels: ${currentMetric.PTW}`);
            d3.select(".WTW").text(`Well-to-wheels: ${currentMetric.WTW}`);
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
                marker: { color: 'blue', width: 1 }
            };
            let trace2 = {
                x: [emiss_values.PTW],
                y: ['PTW'],
                type: 'bar',
                name: 'PTW',
                orientation: 'h',
                marker: { color: 'red', width: 1 }
            };
            let trace3 = {
                x: [emiss_values.WTW],
                y: ['WTW = WTP+PTW'],
                type: 'bar',
                name: 'WTW',
                orientation: 'h',
                marker: { color: 'green', width: 1 }
            };

            let plot = [trace3, trace2, trace1];
            let layout = {
                title: 'Emissions for Selected Fuel and Metric',
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

// Populate the data table with all emissions data
function makeDataTable(metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_OnRoad_WTW_Calculator/refs/heads/main/data/emissions.json").then(function (data) {
        let dataArray = data.emissions;
        let tableBody = d3.select("#tableBody");
        
        // Clear existing table data
        tableBody.html("");
        
        // Populate table with data for all fuels
        dataArray.forEach(fuel => {
            if (fuel[metric]) {
                let row = tableBody.append("tr");
                row.append("td").text(fuel.id);
                row.append("td").text(fuel[metric].WTP);
                row.append("td").text(fuel[metric].PTW);
                row.append("td").text(fuel[metric].WTW);
                row.append("td").html(fuel[metric].units.replace(/CO2e/g, 'CO<sub>2</sub>e'));
            }
        });
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

        // Populate data table metric dropdown
        let tableMetricDropdown = d3.select("#metricSelect");
        metrics.forEach(metric => {
            tableMetricDropdown.append("option").text(metric).property("value", metric);
        });
        
        // Initialize with the first fuel and metric
        let initialfuel = fuels[0];
        let initialMetric = metrics[0];
        makePanel(initialfuel, initialMetric);
        makeBarChart(initialfuel, initialMetric);
        makeDataTable(initialMetric);
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

//Handle data table metric dropdown change
function tableMetricChanged(metric) {
    makeDataTable(metric);
}

init(); // call init function to load the data and create the dropdown list.
