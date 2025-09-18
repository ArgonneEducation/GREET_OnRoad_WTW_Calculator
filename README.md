# GREET_OnRoad_WTW_Calculator
This repository contains code for an app to access GREET **On-Road** data from the WTW Calculator.

## Source and Funding
The data is from software produced by UChicago Argonne, LLC under Contract No. DE-AC02-06CH11357 with the Department of Energy.

Documentation for calculated values can be found at https:/greet.anl.gov/

In addition, this interactive is intended for use with case studies developed by DOE's Bioenergy Technologies Office as part of the Bioenergy Research and Education Bridge Program (BRIDGES).

BRIDGES is a bioenergy case study-based educational toolkit created in partnership with Argonne National Laboratory and Idaho National Laboratory, as well as education, community, industry, and other government partners.  You can learn more about the program at https://www.energy.gov/eere/bioenergy/bioenergy-research-and-education-bridge-program .

## Using the app
In the deployed app, there is a dropdown box in the top left corner.  By default, ["Gasoline-US Mix"](#gasoline-us-mix) is selected, but users can select from variations of on-road fuels and a variety of bioenergy feedstocks.  A second dropdown box near the top left is for the metric to be used.  By default, [grams of CO2 equivalent](#co2e) per MegaJoule is selected, but other emissions and metrics can be chosen as well.

The large bar chart graphic displays the results chosen and displayed above for [well-to-pump](#well-to-pump-wtp), [pump-to-wake](#pump-to-wake-ptw), and [well-to-wake](#well-to-wake-wtw) emissions for the chosen feedstock and metric.  These are defined in the [glossary](#Glossary).

The table at the bottom is configured to show ALL the data for a particular metric, with a column for each feedstock/process.  Again, there is a dropdown box to change the metric.  The table is NOT directly linked to the graph, though the data used for the graph can be found in the table as well, with immediate comparisons to the values for other feedstocks/processes.

## Background Information
The data displayed here are data for life cycle analysis of the emissions (and more) of different processes for producing fuel for on-road vehicles.  Life cycle analysis is a form of cradle-to-grave analysis that is intended to provide information for making decisions about which processes to invest in.  Life cycle analysis helps us answer the question: "Does this new way of doing things really produce fewer emissions when the entire process is considered?"

The "Well-to-Pump" values are for all of the processes involved in producing a fuel.  For petroleum fuels, this would include things like oil field emissions, refinery emissions from producing a fuel, and transportation emissions for delivering a fuel to the location where a consumer could pump the fuel into a vehicle.  The "Pump-to-Wake" values are for combustion of the fuel during use in the vehicle.  In the table at the bottom, it can be seen that these values are often not very different for different fuel production processes and feedstocks.  The "Well-to-Wake" values are simply a combination (by addition) of the two.  


# Glossary

### Biodiesel (BD 100-Soybean)
Biodiesel is produced by the transesterification of vegetable oils or animal fats.  The 100 in the designation indicates that it is 100% from recently living organic matter.  In this case, it is from soybean oil, processed in a refinery to produce a fuel that can be blended with petroleum diesel to make it compatible with diesel engines.  

### CO2e 
Carbon dioxide equivalent.  Includes emissions from typical gases that contribute to the greenhouse effect, reported as carbon dioxide emissions, to attempt to fully encompass greenhouse effect ramifications from a process.

### Corn Stover
The stalks, leaves, and husks that remain in the field after the corn harvest.

### Diesel-US Mix
Values here refer to assumptions made that reflect emissions based upon typical diesel production from petroleum and use in the United States, with regional differences averaged out.

### Ethanol (E 100-Corn)
Ethanol is a product of fermentation of recently living organic matter.  Ethanol is widely blended into petroleum gasoline in the United States.  The 100 in the designation here, however, indicates that it is 100% from recently living organic matter.  100% ethanol is not a common fuel for vehicles in the United States.  The "Corn" in the designation indicates that the values are based upon production of ethanol from corn grain.

### Ethanol (E 100-Switchgrass)
This is 100% ethanol produced from switchgrass, a plant native to North America that can be used for cellulosic ethanol production.

### Gasoline-US Mix
Values here refer to assumptions made that reflect emissions based upon typical gasoline production from petroleum and use in the United States, with regional differences averaged out.

### Pump-to-wake (PTW)  
The stage in the life cycle analysis of a fuel that includes the combustion of fuel during vehicle operation.

### Renewable Diesel
Renewable Diesel is a drop-in biofuel that can be used in regular diesel engines and is produced from biomass feedstocks.

### VOC
Volatile Organic Carbon emissions

### Well-to-pump (WTP)
The stages in the life cycle analysis of a fuel that include exploration, recovery(e.g. from a well), fuel production, and the subsequent transportation of the fuel to the pump which can deliver it to a vehicle.

### Well-to-wake (WTW)
In a life cycle analysis of a fuel, includes the addition of well-to-pump and pump-to-wake stages.  Well-to-wake values are also referred to as cradle-to-grave in an attempt to convey that they 



Note: The app pulls data from a file hosted within the GitHub repository.  


