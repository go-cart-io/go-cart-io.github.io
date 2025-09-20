# Why go-cart.io?

Creating contiguous cartograms used to be difficult and time-consuming. Even experts in data visualization often struggled with the technical skills required. Academic papers introducing new algorithms rarely shared code, and when they did (e.g., in [this GitHub repo](https://github.com/Flow-Based-Cartograms/go_cart)), the software usually required knowledge of shell scripting, compiling, and geographic data structures—barriers for most users.

go-cart.io removes these obstacles. While it was originally designed for contiguous cartograms, it now supports multiple map visualizations. With a simple, browser-based interface, anyone can create cartograms and choropleths without technical expertise.

- Visualization types: Supports contiguous cartograms, non-contiguous cartograms, and choropleths.
- No installation: Works in any modern web browser.
- Flexible input: Choose from our curated map library or upload your own boundary files (.geojson or zipped .shp, .shx, .dbf).
- Fast processing: A remote server computes the visualization in about 10–15 seconds for typical inputs.
- Interactive exploration: Compare results with the original equal-area map and explore with built-in tools.

For individuals or organizations with privacy concerns or large data files, we also offer an on-premise version.

> For more information, please see [Quick Start](/quick-start) and [Tutorials](/tutorials).

# What are Cartograms?

Cartograms are maps in which the areas of regions (e.g. states or provinces) are rescaled to be proportional to statistical data (e.g. population size or gross domestic product). Contiguous cartograms preserve the topology of the conventional map, meaning regions remain adjacent in the cartogram if and only if they are geographic neighbours. In contrast, non-contiguous cartograms relax this constraint: each region is resized independently and placed in its original location, which may create gaps between neighbouring regions.

Creating cartograms has traditionally been a complex endeavour that required expert knowledge in cartography and programming. However, producing cartograms should not be the privilege of only a handful of experts. Journalists or bloggers, for example, may also benefit from a cartogram as an intriguing illustration of their own data. Similarly, students may enrich a term paper with a cartogram that can summarize data more effectively than raw numeric tables.

# What is the Fast Flow-based Algorithm?

One way to create a contiguous cartogram is to create a map projection that transforms every coordinate on a conventional map such that the projected regions on the cartogram have the desired areas. The fast flow-based algorithm translates the cartographic deformations into physics-inspired equations of motion. The basic idea is to allow densely populated regions to flow into regions with lower population. The equations guarantee that we reach the desired areas at the end of the flow process and that neighbouring regions stay connected. We describe several mathematical and computational tricks that speed up the calculation in our [Research Publications](/research).

# Acknowledgment

This website is supported by the following grant(s). Any opinions, findings, and conclusions or recommendations expressed in this material do not reflect the views of the grant provider.

- Ministry of Education, Singapore, under its Academic Research Fund Tier 2 (EP2) programme (Award No. MOE-T2EP20221-0007)

We also extend our thanks to everyone who has contributed to go-cart.io and its related projects!

[filename](contributors.md ":include")
