# Tutorials <!-- {docsify-ignore-all} -->

## Preparing Data

Cartograms are designed to visualize totals, not indices. In general, if it is appropriate to use a pie chart or mosaic plot to visualize a dataset, then it should also be appropriate to use a cartogram. You can refer to the examples of appropriate and inapropriate datasets for use with cartograms below for more guidance:

| Appropriate                          | Inapropriate                                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Total GDP by region                  | [Human Development Index](https://en.wikipedia.org/wiki/Mosaic_plot) (or similar composite statistics) |
| Total population by region           | Population density by region                                                                           |
| Number of college gradates by region | Percentage of population that are college graduates by region                                          |

For some data, the algorithm may not be able to compute a solution. What went wrong? Have you tried to make a small region very large? For example, did you set the objective area of the Vatican City as large as the objective area of Russia? Or did you give a large region an objective area of zero? If yes, the algorithm will struggle with the severe distortions that would be necessary to show the data as a cartogram. In that case, a cartogram may not be the best way to represent your data.

## Generating Cartogram

We offer three primary methods to generate cartograms. Click the links below for detailed tutorials:

1. **[Online Web Interface](/tutorials/online)** (Recommended)

   - Web-based cartogram generator with graphical user interface
   - No installation required
   - Accessible from any device with a browser
   - **Best for**: Most users and quick visualizations

2. **[Local Docker Deployment](/tutorials/local)**

   - Self-contained solution using Docker Compose
   - Requires Docker and Docker Compose
   - go-cart.io that runs on your local machine
   - **Best for**: Working with sensitive/confidential data

3. **[Command Line Tool](/tutorials/cmd)**
   - C++ implementation of fast flow-based algorithm
   - Supports UNIX-based systems only (Linux/macOS)
   - Foundation of go-cart.io's core technology
   - **Best for**: Advanced users and batch processing
