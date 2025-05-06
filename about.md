# What are Cartograms?

Cartograms are maps in which the areas of regions (e.g. states or provinces) are rescaled to be proportional to statistical data (e.g. population size or gross domestic product). Cartograms are called ‘contiguous’ if they maintain the topology of the conventional map (i.e. regions are displayed as neighbours on the cartogram if and only if they are geographic neighbours).

Creating cartograms has traditionally been a complex endeavour that required expert knowledge in cartography and programming. However, producing cartograms should not be the privilege of only a handful of experts. Journalists or bloggers, for example, may also benefit from a cartogram as an intriguing illustration of their own data. Similarly, students may enrich a term paper with a cartogram that can summarize data more effectively than raw numeric tables.

# Why go-cart.io?

In the past, the creation of contiguous cartograms was far from user-friendly. Even experts in data visualisation found it difficult and time-consuming to learn the required computer skills. Scientific publications that introduced new cartogram algorithms rarely included computer code. Some authors of more recent publications have posted their code online (e.g. in [this GitHub repo](https://github.com/Flow-Based-Cartograms/go_cart)), but their software usually assumes technical knowledge about shell scripting, compiling and geographic data structures. These prerequisites pose insurmountable obstacles for most users. The aim of go-cart.io is to simplify cartogram generation. With a simple interface, we want to eliminate hurdles for non-experts and provide a convenient way to create readable cartograms.

# How does go-cart.io Work?

While previous cartogram generators required users to install software on their computer, go-cart.io can be run in any contemporary web browser without additional downloads. A user can select an appropriate map from our curated library or upload own boundary file (.geojson; .shp, .shx, and .dbf in zip). Then, the user can specify visualization and input own data. After data are transmitted, a remote server calculates the cartogram transformation with the fast flow-based algorithm. Because the calculation is entirely server-side, we eliminate any dependence on the client's hardware. For typical input, the calculation finishes within 10 to 15 seconds. The cartogram is displayed in the browser window side by side with the conventional (i.e. equal-area) map. The user can explore both maps with various interactive features.

> For more information, please see [Quick Start](/quick-start) and [Tutorials](/tutorials).

# What is the Fast Flow-based Algorithm?

One way to create a contiguous cartogram is to create a map projection that transforms every coordinate on a conventional map such that the projected regions on the cartogram have the desired areas. The fast flow-based algorithm translates the cartographic deformations into physics-inspired equations of motion. The basic idea is to allow densely populated regions to flow into regions with lower population. The equations guarantee that we reach the desired areas at the end of the flow process and that neighbouring regions stay connected. We describe several mathematical and computational tricks that speed up the calculation in our [Research Publications](/research).

# Acknowledgment

This website is supported by the following grant(s). Any opinions, findings, and conclusions or recommendations expressed in this material do not reflect the views of the grant provider.

- Ministry of Education, Singapore, under its Academic Research Fund Tier 2 (EP2) programme (Award No. MOE-T2EP20221-0007)

We also extend our thanks to everyone who has contributed to go-cart.io and its related projects!

[filename](contributors.md ":include")
