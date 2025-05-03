# What are Cartograms?

Cartograms are maps in which the areas of regions (e.g. states or provinces) are rescaled to be proportional to statistical data (e.g. population size or gross domestic product). Cartograms are called ‘contiguous’ if they maintain the topology of the conventional map (i.e. regions are displayed as neighbours on the cartogram if and only if they are geographic neighbours).

Creating cartograms has traditionally been a complex endeavour that required expert knowledge in cartography and programming. However, producing cartograms should not be the privilege of only a handful of experts. Journalists or bloggers, for example, may also benefit from a cartogram as an intriguing illustration of their own data. Similarly, students may enrich a term paper with a cartogram that can summarize data more effectively than raw numeric tables.

# Why go-cart.io?

In the past, the creation of contiguous cartograms was far from user-friendly. Even experts in data visualisation found it difficult and time-consuming to learn the required computer skills. Scientific publications that introduced new cartogram algorithms rarely included computer code. Some authors of more recent publications have posted their code online (e.g. in this GitHub repo), but their software usually assumes technical knowledge about shell scripting, compiling and geographic data structures. These prerequisites pose insurmountable obstacles for most users. The aim of go-cart.io is to simplify cartogram generation. With a simple interface, we want to eliminate hurdles for non-experts and provide a convenient way to create readable cartograms.

# How does go-cart.io Work?

While previous cartogram generators required users to install software on their computer, go-cart.io is based on JavaScript that can be run in any contemporary web browser without additional downloads. We decided to simplify the data input as much as possible. We have curated a ‘library’ of topologies so that users do not need GIS expertise to create geospatial vector data. After data are transmitted, a remote server calculates the cartogram transformation with the fast flow-based algorithm [1]. Because the calculation is entirely server-side, we eliminate any dependence on the client's hardware. For typical input, the calculation finishes within 10 to 15 seconds. The cartogram is displayed in the browser window side by side with the conventional (i.e. equal-area) map. The user can explore both maps with various interactive features implemented using the Vue.js, D3.js [2], and Vega [3] library.

# What is the Fast Flow-based Algorithm?

One way to create a contiguous cartogram is to create a map projection that transforms every coordinate on a conventional map such that the projected regions on the cartogram have the desired areas. The fast flow-based algorithm translates the cartographic deformations into physics-inspired equations of motion. The basic idea is to allow densely populated regions to flow into regions with lower population. The equations guarantee that we reach the desired areas at the end of the flow process and that neighbouring regions stay connected. In our paper [1], we describe several mathematical and computational tricks that speed up the calculation.

# References

[1] Gastner, M. T., Seguy, V., & More, P. (2018). Fast flow-based algorithm for creating density-equalizing map projections. Proceedings of the National Academy of Sciences, 115(10), E2156-E2164.

[2] Bostock, M., Ogievetsky, V., & Heer, J. (2011). D³ data-driven documents. IEEE transactions on visualization and computer graphics, 17(12), 2301-2309.

[3] Satyanarayan, A., Wongsuphasawat, K., & Heer, J. (2014, October). Declarative interaction design for data visualization. In Proceedings of the 27th annual ACM symposium on User interface software and technology (pp. 669-678).
