# Licenses

- **Source Code**: Licensed under [MIT](https://mit-license.org/)
- **Output Data/Cartograms and Documents**: Licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)

# Attribution Guidelines

## For Output Data and Cartogram

If you use output data and cartograms from https://go-cart.io or [cartogram-cpp](https://github.com/mgastner/cartogram-cpp), please cite:

<!-- tabs:start -->

#### **APA**

```
Gastner MT, Seguy V, More P. Fast low-based algorithm for creating density-equalizing map projections. Proc Natl Acad Sci USA 115(10):E2156–E2164 (2018).
```

#### **BibTeX**

```bibtex
@article{gastner2018fast,
  title={Fast flow-based algorithm for creating density-equalizing map projections},
  author={Gastner, Michael T and Seguy, Vivien and More, Pratyush},
  journal={Proceedings of the National Academy of Sciences},
  volume={115},
  number={10},
  pages={E2156--E2164},
  year={2018},
  publisher={National Academy of Sciences}
}
```

<!-- tabs:end -->

If space is constrained, you may use a shortened attribution as long as "go-cart.io" is mentioned. For example:

```
Generated using go-cart.io.
```

## For Application and its Features

Go-cart.io is a research-driven project. We appreciate citations to relevant publications from our [Research Publications](/research) that align with your use case. If this is not feasible, you may cite the tool broadly:

<!-- tabs:start -->

#### **APA**

```
Gastner MT, Tharatipyakul A. (2025). Go-cart.io: Creating Cartograms Online (Version X.X) [Web application]. https://go-cart.io
```

#### **BibTeX**

```bibtex
@software{gastner_go_cart_2025,
  author = {Gastner, Michael T. and Tharatipyakul, Atima},
  title = {Go-cart.io: Creating Cartograms Online},
  year = {2025},
  version = {X.X},
  howpublished = {Web application},
  url = {https://go-cart.io},
  note = {Accessed: YYYY-MM-DD}
}
```

<!-- tabs:end -->

## For Example Cartograms

TODO...

# Third-party Libraries

## C++ (for binary)

TODO...

## Javascript (for frontend)

| Library          | Link                                          | License      |
| ---------------- | --------------------------------------------- | ------------ |
| @popperjs/core   | https://popper.js.org/                        | MIT          |
| bootstrap        | https://getbootstrap.com/                     | MIT          |
| d3               | https://d3js.org/                             | ISC          |
| pinia            | https://pinia.vuejs.org/                      | MIT          |
| vega             | https://vega.github.io/                       | BSD-3-Clause |
| vega-embed       | https://github.com/vega/vega-embed            | BSD-3-Clause |
| vue              | https://vuejs.org/                            | MIT          |
| xlsx (e965 fork) | https://github.com/e965/sheetjs-npm-publisher | MIT          |

## Python (for backend)

| Library          | Link                                     | License                     |
| ---------------- | ---------------------------------------- | --------------------------- |
| Flask            | https://flask.palletsprojects.com/       | BSD-3-Clause                |
| Flask-Cors       | https://corydolphin.com/flask-cors/      | MIT                         |
| Flask-Migrate    | https://flask-migrate.readthedocs.io/    | MIT                         |
| Flask-Limiter    | https://flask-limiter.readthedocs.io/    | MIT                         |
| Flask-SQLAlchemy | https://palletsprojects.com/             | BSD-3-Clause                |
| SQLAlchemy       | https://www.sqlalchemy.org/              | MIT                         |
| psycopg2-binary  | https://www.psycopg.org/                 | GNU or LGPL with exceptions |
| types-redis      | https://github.com/python/typeshed       | Apache-2.0                  |
| redis            | https://redis-py.readthedocs.io/         | MIT                         |
| gunicorn         | https://gunicorn.org/                    | MIT                         |
| validate_email   | https://pypi.org/project/validate_email/ | LGPL                        |
| captcha          | https://pypi.org/project/captcha/        | BSD-3-Clause                |
| bcrypt           | https://github.com/pyca/bcrypt/          | Apache-2.0                  |
| shapely          | https://shapely.readthedocs.io/          | BSD-3-Clause                |
| geopandas        | https://geopandas.org/                   | BSD-3-Clause                |
| pandas           | https://pandas.pydata.org/               | BSD-3-Clause                |
| mapclassify      | https://pysal.org/mapclassify/           | BSD-3-Clause                |
| libpysal         | https://pysal.org/libpysal/              | BSD-3-Clause                |

## Javascript (for development)

| Library                       | Link                                                             | License    |
| ----------------------------- | ---------------------------------------------------------------- | ---------- |
| @playwright/test              | https://playwright.dev/                                          | Apache-2.0 |
| @tsconfig/node22              | https://github.com/tsconfig/bases                                | MIT        |
| @types/bootstrap              | https://github.com/DefinitelyTyped/DefinitelyTyped               | MIT        |
| @types/d3                     | https://github.com/DefinitelyTyped/DefinitelyTyped               | MIT        |
| @types/geojson                | https://github.com/DefinitelyTyped/DefinitelyTyped               | MIT        |
| @types/jsdom                  | https://github.com/DefinitelyTyped/DefinitelyTyped               | MIT        |
| @types/node                   | https://github.com/DefinitelyTyped/DefinitelyTyped               | MIT        |
| @vitejs/plugin-vue            | https://github.com/vitejs/vite-plugin-vue                        | MIT        |
| @vitest/eslint-plugin         | https://github.com/vitest-dev/vitest                             | MIT        |
| @vue/eslint-config-prettier   | https://github.com/vuejs/eslint-config-prettier                  | MIT        |
| @vue/eslint-config-typescript | https://github.com/vuejs/eslint-config-typescript                | MIT        |
| @vue/test-utils               | https://github.com/vuejs/test-utils                              | MIT        |
| @vue/tsconfig                 | https://github.com/vuejs/tsconfig                                | MIT        |
| eslint                        | https://github.com/eslint/eslint                                 | MIT        |
| eslint-plugin-playwright      | https://github.com/playwright-community/eslint-plugin-playwright | Apache-2.0 |
| eslint-plugin-vue             | https://github.com/vuejs/eslint-plugin-vue                       | MIT        |
| jiti                          | https://github.com/unjs/jiti                                     | MIT        |
| jsdom                         | https://github.com/jsdom/jsdom                                   | MIT        |
| npm-run-all2                  | https://github.com/mysticatea/npm-run-all                        | MIT        |
| prettier                      | https://github.com/prettier/prettier                             | MIT        |
| sass                          | https://github.com/sass/dart-sass                                | MIT        |
| typescript                    | https://github.com/Microsoft/TypeScript                          | Apache-2.0 |
| vite                          | https://github.com/vitejs/vite                                   | MIT        |
| vite-plugin-vue-devtools      | https://github.com/webfansplz/vite-plugin-vue-devtools           | MIT        |
| vitest                        | https://github.com/vitest-dev/vitest                             | MIT        |
| vue-tsc                       | https://github.com/vuejs/language-tools                          | MIT        |
| @semantic-release/changelog   | https://github.com/semantic-release/changelog                    | MIT        |
| @semantic-release/exec        | https://github.com/semantic-release/exec                         | MIT        |
| @semantic-release/git         | https://github.com/semantic-release/git                          | MIT        |
| semantic-release              | https://github.com/semantic-release/semantic-release             | MIT        |

## Javascript (for documents)

| Library | Link                    | License |
| ------- | ----------------------- | ------- |
| docsify | https://docsify.js.org/ | MIT     |

TODO...

# Third-party Data

TODO...
