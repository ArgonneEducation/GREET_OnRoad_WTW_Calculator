# GREET_OnRoad_WTW_Calculator
This repository contains code for an app to access GREET on-road data from the WTW Calculator.

Data accessible through this app includes only information on different fuels for **On-Road** vehicles and different fuels.  For each fuel/metric combination available, users can view Well-to-Pump, Pump-to-Wake, and Well-to-Wake values for the specific metric chosen. These are defined in the [glossary](#Glossary).


# Opening the App
Access the app at the link: https://argonneeducation.github.io/GREET_OnRoad_WTW_Calculator/


# Using the App
At the top left, there is a dropdown box labeled **Select a Fuel:**
Use this dropdown to select which fuel or feedstock you'd like results for.

Just below the top dropdown is anothe dropdown box labeled **Select a Metric:**
Use this dropdown to select a metric or type of emissions to get results for.

Below the dropdowns is an **Emissions by Stage** section that reports numerical values for the fuel and metric combination that you have chosen.  The definitions for the stages can be found in the [glossary](#Glossary).The units for the values are also shown in this section.

The bar chart below this is a visualization of the values reported in the **Emissions by Stage** section.  

The **Interactive Data Table** below the chart is a separate section which is fed by a separate dropdown menu.  Here users can select a metric, and the values for each of the available fuels then populate the table.  This allows for easier comparison between fuels as well as the opportunity to recognize patterns that are not as apparent in the visualization of only one fuel/metric combination at a time.


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

As shown within the app, this product includes software produced by UChicago Argonne, LLC under Contrat No. DE-AC02-06CH11357 with the Department of Energy.  

Documentation for calculated values can be found at https://greet.anl.gov/

