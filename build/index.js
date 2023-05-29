var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundry: () => CatchBoundry,
  ErrorBoundry: () => ErrorBoundry,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/main.css
var main_default = "/build/_assets/main-XQWU67KR.css";

// app/styles/side-menu.css
var side_menu_default = "/build/_assets/side-menu-G4Y6LELK.css";

// app/ui-components/BasicNavLink.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function BasicNavLink({ prefetch = "intent", role = "", to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_react2.NavLink,
    {
      prefetch,
      to,
      role,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/ui-components/BasicNavLink.tsx",
      lineNumber: 4,
      columnNumber: 11
    },
    this
  );
}

// app/session.tsx
var import_node2 = require("@remix-run/node");

// app/resource/db.tsx
var import_mysql2 = require("mysql2"), import_node_cache = __toESM(require("node-cache")), cache, pool;
function connect() {
  return pool !== void 0 ? pool == null ? void 0 : pool.promise() : (pool = (0, import_mysql2.createPool)({
    host: process.env.TTDBHOST,
    user: process.env.TTDBUSERNAME,
    password: process.env.TTDBPASSWORD,
    database: "eisenhowermatrix",
    connectionLimit: 100,
    queueLimit: 100
  }), pool.promise());
}
var db = connect();
function getCache() {
  return cache !== void 0 || (cache = new import_node_cache.default({ stdTTL: 5, checkperiod: 60 })), cache;
}
async function execute(query, values) {
  if (!query.includes("SELECT ")) {
    let connection2 = await db.getConnection(), result2 = await connection2.execute(query, values);
    return connection2.release(), result2;
  }
  let key = JSON.stringify({ query, values }), cache2 = getCache(), cachedResult = cache2.get(key);
  if (cachedResult)
    return cachedResult;
  let connection = await db.getConnection(), result = await connection.execute(query, values);
  return connection.release(), cache2.set(key, result), result;
}
var db_default = {
  execute
};

// app/resource/Users.tsx
var getObjectKeyValues = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => obj[key]);
  return {
    keys,
    values
  };
};
async function create(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME} (${TABLE_ATTRIBUTES.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll() {
  let query = `SELECT * FROM ${TABLE_NAME}`, [rows] = await db_default.execute(query);
  return await hydrate(rows);
}
async function update(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES.length }, (_, index) => `${TABLE_ATTRIBUTES[index]}=?`), query = `
    UPDATE ${TABLE_NAME} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, values);
}
async function search(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, values);
  return await hydrate(rows);
}
async function hydrate(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    email,
    hashPassword,
    createdAt,
    updatedAt
  }) => new User({
    id,
    name,
    email,
    hashPassword,
    createdAt,
    updatedAt
  })));
}

// app/model/User.tsx
var TABLE_NAME = "Users", TABLE_ATTRIBUTES = [
  "name",
  "email",
  "hashPassword"
];
function User(obj) {
  return this.set(obj);
}
function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => this[attribute]);
}
function set(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create2() {
  try {
    await create(this);
  } catch (error) {
    console.error("createUser error:", error);
  }
  return this;
}
async function search2(criteriaObj) {
  try {
    return await search(criteriaObj);
  } catch (error) {
    return console.error("searchUser error:", error), [];
  }
}
async function update2() {
  try {
    await update(this);
  } catch (error) {
    console.error("updateUser error:", error);
  }
  return this;
}
async function erase2(criteriaObj) {
  try {
    await erase(criteriaObj);
  } catch (error) {
    console.error("eraseUser error:", error);
  }
}
Object.assign(
  User.prototype,
  {
    getAttributeValues,
    set,
    create: create2,
    update: update2
  }
);

// app/session.tsx
var sessionCookie = (0, import_node2.createCookie)("__session", {
  secrets: ["r3m1xr0ck5"],
  sameSite: !0
}), { getSession, commitSession, destroySession } = (0, import_node2.createFileSessionStorage)({
  dir: "user-sessions",
  cookie: sessionCookie
}), getUserSession = async (request) => {
  let session = await getSession(request.headers.get("Cookie")), userId = session.get("id"), users = userId ? await search2({ id: userId }) : [];
  return {
    session,
    user: users[0]
  };
}, setCookieHeader = async (session) => ({
  "Set-Cookie": await commitSession(session)
}), destroyCookieHeader = async (request) => ({
  "Set-Cookie": await destroySession(request)
});

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function App() {
  let { user } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", "data-theme": "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "container-fluid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Team Task Manager" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
          !user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/sign-in", children: "sign in" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 34,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/create-an-account", children: "sign up" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 35,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 24
          }, this),
          user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/account", children: user.name }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 38,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 38,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/sign-out", children: "sign out" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 39,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 39,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { children: user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "closed-on-mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/users", children: "users" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/organizations", children: "organizations" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/roles", children: "roles" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/permissions", children: "permissions" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/projects", children: "projects" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/topics", children: "topics" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/taskstatus", children: "task status" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/tasks", children: "tasks" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/resources", children: "resources" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 56,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/logs", children: "logs" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 57,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/reports", children: "reports" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { role: "document", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function ErrorBoundry({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Sorry" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      error.message,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
var loader = async ({ request }) => {
  let { user } = await getUserSession(request);
  return { user };
};
function CatchBoundry() {
  let caught = (0, import_react3.useCatch)();
  return console.error(caught), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Sorry" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      caught.statusText,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
var links = () => [{
  rel: "stylesheet",
  href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
}, {
  rel: "stylesheet",
  href: "https://cdn.lineicons.com/4.0/lineicons.css"
}, {
  rel: "stylesheet",
  href: main_default
}, {
  rel: "stylesheet",
  href: side_menu_default
}], meta = () => ({
  charset: "utf-8",
  title: "Team Task Manager",
  viewport: "width=device-width,initial-scale=1"
});

// app/routes/taskstatus/delete.$id.tsx
var delete_id_exports = {};
__export(delete_id_exports, {
  action: () => action,
  default: () => DeleteTaskStatus,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/resource/TaskStatus.tsx
async function create3(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES2.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME2} (${TABLE_ATTRIBUTES2.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll2() {
  let query = `SELECT * FROM ${TABLE_NAME2}`, [rows] = await db_default.execute(query);
  return await hydrate2(rows);
}
async function update3(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES2.length }, (_, index) => `${TABLE_ATTRIBUTES2[index]}=?`), query = `
    UPDATE ${TABLE_NAME2} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase3(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME2}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search3(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME2}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate2(rows);
}
async function hydrate2(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new TaskStatus({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/TaskStatus.tsx
var TABLE_NAME2 = "TaskStatus", TABLE_ATTRIBUTES2 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function TaskStatus(obj) {
  return this.set(obj);
}
function getAttributeValues2() {
  return TABLE_ATTRIBUTES2.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set2(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create4() {
  return await create3(this), this;
}
async function search4(criteriaObj) {
  return (await search3(criteriaObj)).map((row) => new TaskStatus(row));
}
async function update4() {
  return await update3(this), this;
}
async function erase4(criteriaObj) {
  await erase3(criteriaObj);
}
Object.assign(
  TaskStatus.prototype,
  {
    getAttributeValues: getAttributeValues2,
    set: set2,
    create: create4,
    update: update4
  }
);

// app/routes/taskstatus/delete.$id.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function DeleteTaskStatus() {
  let isSubmitting = (0, import_react4.useTransition)().state === "submitting", data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "TaskStatus" }, void 0, !1, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Delete TaskStatus" }, void 0, !1, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/taskstatus/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/taskstatus/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/taskstatus/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/taskstatus/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/taskstatus/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader2 = async ({ request, params }) => {
  let objs = await search4({ id: params.id });
  return (0, import_node3.json)(objs[0]);
}, action = async ({ request, params }) => (await erase4({ id: params.id }), (0, import_node3.redirect)("/taskstatus"));

// app/routes/taskstatus/update.$id.tsx
var update_id_exports = {};
__export(update_id_exports, {
  action: () => action2,
  default: () => UpdateTaskStatus,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/sanitizerForm.tsx
var import_isomorphic_dompurify = __toESM(require("isomorphic-dompurify"));
function sanitizeData({ formData }) {
  let rawData = Object.fromEntries(formData);
  return Object.keys(rawData).reduce((acc, key) => (acc[key] = import_isomorphic_dompurify.default.sanitize(rawData[key]).trim(), acc), {});
}

// app/ui-components/TaskStatusForm.tsx
var import_react5 = require("@remix-run/react");

// app/ui-components/FieldsetLegend.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FieldsetLegend({
  title = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("legend", { children: title }, void 0, !1, {
      fileName: "app/ui-components/FieldsetLegend.tsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/ui-components/FieldsetLegend.tsx",
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

// app/ui-components/LabelInput.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function LabelInput({
  name = "",
  placeholder = "",
  required = !1,
  tabIndex = 0,
  type = "text",
  defaultValue = ""
}) {
  let id = `input-${name}`, displayName = name.split("-").join(" ");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: id, children: displayName }, void 0, !1, {
      fileName: "app/ui-components/LabelInput.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "input",
      {
        id,
        name,
        placeholder,
        required,
        tabIndex,
        type,
        defaultValue
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/LabelInput.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/LabelInput.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this);
}

// app/ui-components/LabelTextarea.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function LabelTextarea({
  cols = 30,
  defaultValue = "",
  name = "",
  placeholder = "",
  required = !1,
  rows = 10,
  tabIndex = 0
}) {
  let id = `input-${name}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: id, children: name }, void 0, !1, {
      fileName: "app/ui-components/LabelTextarea.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "textarea",
      {
        cols,
        defaultValue,
        id,
        name,
        placeholder,
        required,
        rows,
        tabIndex
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/LabelTextarea.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/LabelTextarea.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this);
}

// app/ui-components/TaskStatusForm.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function TaskStatusForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TaskStatusForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FieldsetLegend, { title: "task status details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "task status name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskStatusForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the task status",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskStatusForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/TaskStatusForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/TaskStatusForm.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/TaskStatusForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var getButtonName = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/taskstatus/update.$id.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function UpdateTaskStatus() {
  let isSubmitting = (0, import_react6.useTransition)().state === "submitting", data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: "Update Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TaskStatusForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/taskstatus/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/taskstatus/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader3 = async ({ request, params }) => {
  let objs = await search4({ id: params.id });
  return (0, import_node4.json)(objs[0]);
}, action2 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search4({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node4.redirect)("/taskstatus");
};

// app/routes/create-an-account.tsx
var create_an_account_exports = {};
__export(create_an_account_exports, {
  action: () => action3,
  default: () => CreateAnAccount,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/ui-components/UserForm.tsx
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function UserForm({
  name = "",
  email = "",
  isSubmitting = !1,
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/UserForm.tsx",
    lineNumber: 9,
    columnNumber: 14
  }, this)
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react7.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FieldsetLegend, { title: "user details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "full name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/UserForm.tsx",
          lineNumber: 16,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        LabelInput,
        {
          defaultValue: email,
          name: "email",
          placeholder: "email",
          required: !0,
          tabIndex: 2,
          type: "email"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/UserForm.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        LabelInput,
        {
          name: "password",
          placeholder: "password",
          required: !0,
          tabIndex: 3,
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/UserForm.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        LabelInput,
        {
          name: "confirm-password",
          placeholder: "confirm password",
          required: !0,
          tabIndex: 4,
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/UserForm.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/UserForm.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        tabIndex: 5,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName2(!name && !email, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/UserForm.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/UserForm.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var getButtonName2 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/create-an-account.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CreateAnAccount() {
  let isSubmitting = (0, import_react8.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Create an account" }, void 0, !1, {
      fileName: "app/routes/create-an-account.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UserForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/create-an-account.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create-an-account.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action3 = async ({ request, params }) => {
  let { name, email, password } = sanitizeData({ formData: await request.formData() }), hashPassword = await import_bcryptjs.default.hash(password, 10);
  return await new User({
    name,
    email,
    hashPassword
  }).create(), (0, import_node5.redirect)("/sign-in");
}, meta2 = () => ({
  title: "Create an account - Team Task Manager",
  description: "Create an account page"
});

// app/routes/taskstatus/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action4,
  default: () => CreateTopic
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function CreateTopic() {
  let isSubmitting = (0, import_react9.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Create Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TaskStatusForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/taskstatus/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/taskstatus/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action4 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return await new TaskStatus({
    name,
    description,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node6.redirect)("/taskstatus");
};

// app/routes/taskstatus/index.tsx
var taskstatus_exports = {};
__export(taskstatus_exports, {
  default: () => AllTaskStatus,
  loader: () => loader4,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AllTaskStatus() {
  let rows = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "All Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Rows, { data: rows }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/taskstatus/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/taskstatus/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader4 = async ({ params }) => {
  let rows = await readAll2();
  return (0, import_node7.json)(rows);
}, meta3 = () => ({
  title: "Task Status - Team Task Manager",
  description: "Task Status page"
});

// app/routes/organizations.tsx
var organizations_exports = {};
__export(organizations_exports, {
  default: () => Organizations,
  links: () => links2
});
var import_react11 = require("@remix-run/react");

// app/styles/summary-control.css
var summary_control_default = "/build/_assets/summary-control-F3OUIBKS.css";

// app/routes/organizations.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Organizations() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "app/routes/organizations.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizations.tsx",
    lineNumber: 6,
    columnNumber: 11
  }, this);
}
var links2 = () => [{
  rel: "stylesheet",
  href: summary_control_default
}];

// app/routes/organizations/delete.$id.tsx
var delete_id_exports2 = {};
__export(delete_id_exports2, {
  action: () => action5,
  default: () => DeleteOrganization,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/resource/Organizations.tsx
var getObjectKeyValues2 = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => `${obj[key]}`);
  return {
    keys,
    values
  };
};
async function create5(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES3.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME3} (${TABLE_ATTRIBUTES3.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `, [result, response] = await db_default.execute(query, obj.getAttributeValues()), queryUserOrg = `
    INSERT INTO UserOrganization (userId, organizationId, createdByUserId)
    VALUES (?,?,?)
  `;
  await db_default.execute(queryUserOrg, [obj.createdBy.id, result.insertId, obj.createdBy.id]);
}
async function update5(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES3.length }, (_, index) => `${TABLE_ATTRIBUTES3[index]}=?`), query = `
    UPDATE ${TABLE_NAME3} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase5(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME3}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, values);
}
async function addUser(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO UserOrganization (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseUser(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), query = `
    DELETE FROM UserOrganization
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search5(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME3}
    WHERE ${attributePlaceholder}
  `, [rows, response] = await db_default.execute(query, values);
  return await hydrate3(rows);
}
async function searchUserOrganization(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), query = `
      SELECT userId FROM UserOrganization
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search2({ id: row.userId }))[0]));
}
async function hydrate3(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId }), users = await searchUserOrganization({ organizationId: id });
    return new Organization({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      users
    });
  }));
}

// app/model/Organization.tsx
var TABLE_NAME3 = "Organizations", TABLE_ATTRIBUTES3 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Organization(obj) {
  return this.set(obj);
}
function getAttributeValues3() {
  return TABLE_ATTRIBUTES3.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set3(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create6() {
  try {
    await create5(this);
  } catch (error) {
    console.error("createOrganization error:", error);
  }
  return this;
}
async function search6(criteriaObj) {
  try {
    return await search5(criteriaObj);
  } catch (error) {
    return console.error("searchOrganization error:", error), [];
  }
}
async function update6() {
  try {
    await update5(this);
  } catch (error) {
    console.error("updateOrganization error:", error);
  }
  return this;
}
async function erase6(criteriaObj) {
  try {
    await erase5(criteriaObj);
  } catch (error) {
    console.error("eraseOrganization error:", error);
  }
}
async function addUser2(criteriaObj) {
  try {
    await addUser(criteriaObj);
  } catch (error) {
    console.error("addUserIntoOrganization error:", error);
  }
  return this;
}
async function eraseUser2(criteriaObj) {
  try {
    await eraseUser(criteriaObj);
  } catch (error) {
    console.error("eraseUserFromOrganization error:", error);
  }
  return this;
}
Object.assign(
  Organization.prototype,
  {
    getAttributeValues: getAttributeValues3,
    set: set3,
    create: create6,
    update: update6
  }
);

// app/routes/organizations/delete.$id.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function DeleteOrganization() {
  let isSubmitting = (0, import_react12.useTransition)().state === "submitting", data = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "Delete organization?" }, void 0, !1, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: "name:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizations/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/organizations/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader5 = async ({ request, params }) => {
  let objs = await search6({ id: params.id });
  return (0, import_node8.json)(objs[0]);
}, action5 = async ({ request, params }) => (await erase6({ id: params.id }), (0, import_node8.redirect)("/organizations"));

// app/routes/organizations/update.$id.tsx
var update_id_exports2 = {};
__export(update_id_exports2, {
  action: () => action6,
  default: () => DeleteOrganization2,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react");

// app/ui-components/OrganizationForm.tsx
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function OrganizationForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/OrganizationForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(FieldsetLegend, { title: "organization details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "organization name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/OrganizationForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the organization",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/OrganizationForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/OrganizationForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName3(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/OrganizationForm.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/OrganizationForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var getButtonName3 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/organizations/update.$id.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function DeleteOrganization2() {
  let isSubmitting = (0, import_react14.useTransition)().state === "submitting", data = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Update organization?" }, void 0, !1, {
        fileName: "app/routes/organizations/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(OrganizationForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/organizations/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader6 = async ({ request, params }) => {
  let objs = await search6({ id: Number(params.id) });
  return (0, import_node9.json)(objs[0]);
}, action6 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search6({ id: Number(params.id) }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node9.redirect)("/organizations");
};

// app/routes/organizations/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  action: () => action7,
  default: () => CreateOrganization
});
var import_node10 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function CreateOrganization() {
  let isSubmitting = (0, import_react15.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "Create an organization" }, void 0, !1, {
        fileName: "app/routes/organizations/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(OrganizationForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/organizations/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action7 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return await new Organization({
    name,
    description,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node10.redirect)("/organizations");
};

// app/routes/organizations/index.tsx
var organizations_exports2 = {};
__export(organizations_exports2, {
  action: () => action8,
  default: () => AllOrganizations,
  loader: () => loader7,
  meta: () => meta4
});
var import_node11 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

// app/ui-components/Chip.tsx
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), chipStyle = {
  display: "inline-block",
  padding: "0.1rem 1rem",
  borderRadius: "1rem",
  margin: "0.1rem",
  position: "relative",
  border: "1px solid #11191f"
}, chipDeleteBtnStyle = {
  position: "relative",
  top: "2px",
  left: "10px",
  color: "hsl(195deg, 85%, 41%)"
}, formStyle = {
  display: "inline"
}, buttonStyle = {
  all: "unset"
};
function Chip({ children, actionName, data }) {
  let keys = Object.keys(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: chipStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children }, void 0, !1, {
      fileName: "app/ui-components/Chip.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Form, { style: formStyle, method: "post", children: [
      keys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", name: key, value: data[key] }, key, !1, {
        fileName: "app/ui-components/Chip.tsx",
        lineNumber: 43,
        columnNumber: 22
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          style: buttonStyle,
          type: "submit",
          name: "_action",
          value: actionName,
          "aria-label": actionName,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("i", { style: chipDeleteBtnStyle, className: "lni lni-cross-circle" }, void 0, !1, {
            fileName: "app/ui-components/Chip.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/Chip.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/Chip.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui-components/Chip.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/ui-components/LabelSelect.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function LabelSelect({
  name = "",
  required = !1,
  tabIndex = 0,
  defaultValue = "",
  options = []
}) {
  let id = `input-${name}`, displayName = name.split("-").join(" ");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: id, children: displayName }, void 0, !1, {
      fileName: "app/ui-components/LabelSelect.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "select",
      {
        id,
        name,
        required,
        tabIndex,
        defaultValue,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Options, { data: options }, void 0, !1, {
          fileName: "app/ui-components/LabelSelect.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/LabelSelect.tsx",
        lineNumber: 12,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/LabelSelect.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var Options = ({ data }) => data.map(({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "option",
  {
    value: id,
    children: name
  },
  id,
  !1,
  {
    fileName: "app/ui-components/LabelSelect.tsx",
    lineNumber: 26,
    columnNumber: 12
  },
  this
));

// app/routes/organizations/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), ACTION_ADD_USER = "add-user", ACTION_REMOVE_USER = "remove-user";
function AllOrganizations() {
  let { organizations, allUsers } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { children: "All Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Rows2, { organizations, allUsers }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this);
}
var UserChips = ({ users, organizationId }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: users.length === 0 ? "there is no user in this organization" : users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_USER,
    data: { userId: user.id, organizationId },
    children: user.name
  },
  user.id,
  !1,
  {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 43,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 37,
  columnNumber: 11
}, this), UserSelectOptions = ({ organizationId, allUsers }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", name: "organizationId", value: organizationId }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(LabelSelect, { name: ACTION_ADD_USER, options: allUsers }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "button",
    {
      type: "submit",
      name: "_action",
      value: ACTION_ADD_USER,
      "aria-label": ACTION_ADD_USER,
      children: "add"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 58,
  columnNumber: 5
}, this), Rows2 = ({ organizations, allUsers }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: organizations.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  users
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("summary", { className: "with-control-button", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
      index + 1,
      ". ",
      name
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 93,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 94,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 91,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { children: [
      "Description: ",
      description
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 97,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { children: [
      "Created by: ",
      createdBy.name,
      " on ",
      createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { children: [
      "Last updated by: ",
      updatedBy.name,
      " on ",
      updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 99,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { children: [
      "Users: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(UserChips, { users, organizationId: id }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 100,
        columnNumber: 26
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 100,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 96,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(UserSelectOptions, { allUsers, organizationId: id }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 102,
    columnNumber: 13
  }, this)
] }, id, !0, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 90,
  columnNumber: 11
}, this)) }, void 0, !1, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 74,
  columnNumber: 11
}, this), loader7 = async ({ request, params }) => {
  let { user } = await getUserSession(request), organizations = await search6({ createdByUserId: user.id }), allUsers = await readAll();
  return (0, import_node11.json)({ organizations, allUsers });
}, action8 = async ({ request }) => {
  let { user } = await getUserSession(request), { _action, organizationId, ...values } = sanitizeData({ formData: await request.formData() });
  switch (_action) {
    case ACTION_ADD_USER:
      await addUser2({
        createdByUserId: user.id,
        organizationId,
        userId: values[ACTION_ADD_USER]
      });
      break;
    case ACTION_REMOVE_USER:
      await eraseUser2({ userId: values.userId, organizationId });
      break;
    default:
      break;
  }
  return null;
}, meta4 = () => ({
  title: "Organizations - Team Task Manager",
  description: "Organizations page"
});

// app/routes/permissions.tsx
var permissions_exports = {};
__export(permissions_exports, {
  default: () => Permissions
});
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Permissions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
    fileName: "app/routes/permissions.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/permissions.tsx",
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

// app/routes/permissions/delete.$id.tsx
var delete_id_exports3 = {};
__export(delete_id_exports3, {
  action: () => action9,
  default: () => DeletePermission,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/resource/Permissions.tsx
async function create7(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES4.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME4} (${TABLE_ATTRIBUTES4.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll3() {
  let query = `SELECT * FROM ${TABLE_NAME4}`, [rows] = await db_default.execute(query);
  return await hydrate4(rows);
}
async function update7(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES4.length }, (_, index) => `${TABLE_ATTRIBUTES4[index]}=?`), query = `
    UPDATE ${TABLE_NAME4} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase7(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME4}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search7(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME4}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate4(rows);
}
async function hydrate4(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Permission({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Permission.tsx
var TABLE_NAME4 = "Permissions", TABLE_ATTRIBUTES4 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Permission(obj) {
  return this.set(obj);
}
function getAttributeValues4() {
  return TABLE_ATTRIBUTES4.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set4(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create8() {
  return await create7(this), this;
}
async function search8(criteriaObj) {
  return (await search7(criteriaObj)).map((row) => new Permission(row));
}
async function update8() {
  return await update7(this), this;
}
async function erase8(criteriaObj) {
  await erase7(criteriaObj);
}
Object.assign(
  Permission.prototype,
  {
    getAttributeValues: getAttributeValues4,
    set: set4,
    create: create8,
    update: update8
  }
);

// app/routes/permissions/delete.$id.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function DeletePermission() {
  let isSubmitting = (0, import_react19.useTransition)().state === "submitting", data = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { children: "Delete Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/permissions/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react19.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/permissions/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/permissions/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader8 = async ({ request, params }) => {
  let objs = await search8({ id: params.id });
  return (0, import_node12.json)(objs[0]);
}, action9 = async ({ request, params }) => (await erase8({ id: params.id }), (0, import_node12.redirect)("/permissions"));

// app/routes/permissions/update.$id.tsx
var update_id_exports3 = {};
__export(update_id_exports3, {
  action: () => action10,
  default: () => DeletePermission2,
  loader: () => loader9
});
var import_node13 = require("@remix-run/node"), import_react21 = require("@remix-run/react");

// app/ui-components/PermissionForm.tsx
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function PermissionForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/PermissionForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react20.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(FieldsetLegend, { title: "permission details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "permission name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/PermissionForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the permission",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/PermissionForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/PermissionForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName4(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/PermissionForm.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/PermissionForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var getButtonName4 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/permissions/update.$id.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function DeletePermission2() {
  let isSubmitting = (0, import_react21.useTransition)().state === "submitting", data = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "Update Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(PermissionForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/permissions/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/permissions/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader9 = async ({ request, params }) => {
  let objs = await search8({ id: params.id });
  return (0, import_node13.json)(objs[0]);
}, action10 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search8({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node13.redirect)("/permissions");
};

// app/routes/permissions/create.tsx
var create_exports3 = {};
__export(create_exports3, {
  action: () => action11,
  default: () => CreatePermission
});
var import_node14 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function CreatePermission() {
  let isSubmitting = (0, import_react22.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { children: "Create a Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(PermissionForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/permissions/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/permissions/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action11 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return await new Permission({
    name,
    description,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node14.redirect)("/permissions");
};

// app/routes/permissions/index.tsx
var permissions_exports2 = {};
__export(permissions_exports2, {
  default: () => AllPermissions,
  loader: () => loader10,
  meta: () => meta5
});
var import_node15 = require("@remix-run/node"), import_react23 = require("@remix-run/react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function AllPermissions() {
  let rows = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "All Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Rows3, { data: rows }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/permissions/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows3 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/permissions/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/permissions/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader10 = async ({ params }) => {
  let rows = await readAll3();
  return (0, import_node15.json)(rows);
}, meta5 = () => ({
  title: "Permissions - Team Task Manager",
  description: "Permissions page"
});

// app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => Resources
});
var import_react24 = require("@remix-run/react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Resources() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
    fileName: "app/routes/resources.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/resources.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/resources/delete.$id.tsx
var delete_id_exports4 = {};
__export(delete_id_exports4, {
  action: () => action12,
  default: () => DeleteResource,
  loader: () => loader11
});
var import_node16 = require("@remix-run/node"), import_react25 = require("@remix-run/react");

// app/resource/Resources.tsx
async function create9(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES5.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME5} (${TABLE_ATTRIBUTES5.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll4() {
  let query = `SELECT * FROM ${TABLE_NAME5}`, [rows] = await db_default.execute(query);
  return await hydrate5(rows);
}
async function update9(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES5.length }, (_, index) => `${TABLE_ATTRIBUTES5[index]}=?`), query = `
    UPDATE ${TABLE_NAME5} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase9(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME5}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search9(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME5}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate5(rows);
}
async function hydrate5(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Resource({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Resource.tsx
var TABLE_NAME5 = "Resources", TABLE_ATTRIBUTES5 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Resource(obj) {
  return this.set(obj);
}
function getAttributeValues5() {
  return TABLE_ATTRIBUTES5.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set5(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create10() {
  return await create9(this), this;
}
async function search10(criteriaObj) {
  return (await search9(criteriaObj)).map((row) => new Resource(row));
}
async function update10() {
  return await update9(this), this;
}
async function erase10(criteriaObj) {
  await erase9(criteriaObj);
}
Object.assign(
  Resource.prototype,
  {
    getAttributeValues: getAttributeValues5,
    set: set5,
    create: create10,
    update: update10
  }
);

// app/routes/resources/delete.$id.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function DeleteResource() {
  let isSubmitting = (0, import_react25.useTransition)().state === "submitting", data = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { children: "Delete Resources" }, void 0, !1, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/resources/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react25.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/resources/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader11 = async ({ request, params }) => {
  let objs = await search10({ id: params.id });
  return (0, import_node16.json)(objs[0]);
}, action12 = async ({ request, params }) => (await erase10({ id: params.id }), (0, import_node16.redirect)("/resources"));

// app/routes/resources/update.$id.tsx
var update_id_exports4 = {};
__export(update_id_exports4, {
  action: () => action13,
  default: () => DeleteResource2,
  loader: () => loader12
});
var import_node17 = require("@remix-run/node"), import_react27 = require("@remix-run/react");

// app/ui-components/ResourceForm.tsx
var import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function ResourceForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/ResourceForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react26.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(FieldsetLegend, { title: "resource details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "resource name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/ResourceForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the resource",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/ResourceForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/ResourceForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName5(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/ResourceForm.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/ResourceForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var getButtonName5 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/resources/update.$id.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function DeleteResource2() {
  let isSubmitting = (0, import_react27.useTransition)().state === "submitting", data = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { children: "Update Resources" }, void 0, !1, {
        fileName: "app/routes/resources/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ResourceForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/resources/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader12 = async ({ request, params }) => {
  let objs = await search10({ id: params.id });
  return (0, import_node17.json)(objs[0]);
}, action13 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search10({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node17.redirect)("/resources");
};

// app/routes/resources/create.tsx
var create_exports4 = {};
__export(create_exports4, {
  action: () => action14,
  default: () => CreateResource
});
var import_node18 = require("@remix-run/node"), import_react28 = require("@remix-run/react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function CreateResource() {
  let isSubmitting = (0, import_react28.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { children: "Create a Resource" }, void 0, !1, {
        fileName: "app/routes/resources/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ResourceForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/resources/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action14 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return await new Resource({
    name,
    description,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node18.redirect)("/resources");
};

// app/routes/resources/index.tsx
var resources_exports2 = {};
__export(resources_exports2, {
  default: () => AllResources,
  loader: () => loader13,
  meta: () => meta6
});
var import_node19 = require("@remix-run/node"), import_react29 = require("@remix-run/react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function AllResources() {
  let rows = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { children: "All Resources" }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/resources/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Rows4, { data: rows }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows4 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader13 = async ({ params }) => {
  let rows = await readAll4();
  return (0, import_node19.json)(rows);
}, meta6 = () => ({
  title: "Resources - Team Task Manager",
  description: "Resources page"
});

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects
});
var import_react30 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react30.Outlet, {}, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

// app/routes/projects/delete.$id.tsx
var delete_id_exports5 = {};
__export(delete_id_exports5, {
  action: () => action15,
  default: () => DeleteProject,
  loader: () => loader14
});
var import_node20 = require("@remix-run/node"), import_react31 = require("@remix-run/react");

// app/resource/Projects.tsx
async function create11(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES6.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME6} (${TABLE_ATTRIBUTES6.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll5() {
  let query = `SELECT * FROM ${TABLE_NAME6}`, [rows] = await db_default.execute(query);
  return await hydrate6(rows);
}
async function update11(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES6.length }, (_, index) => `${TABLE_ATTRIBUTES6[index]}=?`), query = `
    UPDATE ${TABLE_NAME6} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase11(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME6}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search11(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME6}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate6(rows);
}
async function hydrate6(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Project({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Project.tsx
var TABLE_NAME6 = "Projects", TABLE_ATTRIBUTES6 = [
  "name",
  "description",
  "organizationId",
  "createdByUserId",
  "updatedByUserId"
];
function Project(obj) {
  return this.set(obj);
}
function getAttributeValues6() {
  return TABLE_ATTRIBUTES6.map((attribute) => {
    switch (attribute) {
      case "organizationId":
        return this.organization.id;
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set6(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create12() {
  return await create11(this), this;
}
async function search12(criteriaObj) {
  return (await search11(criteriaObj)).map((row) => new Project(row));
}
async function update12() {
  return await update11(this), this;
}
async function erase12(criteriaObj) {
  await erase11(criteriaObj);
}
Object.assign(
  Project.prototype,
  {
    getAttributeValues: getAttributeValues6,
    set: set6,
    create: create12,
    update: update12
  }
);

// app/routes/projects/delete.$id.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function DeleteProject() {
  let isSubmitting = (0, import_react31.useTransition)().state === "submitting", data = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { children: "Delete Project" }, void 0, !1, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react31.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/projects/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader14 = async ({ request, params }) => {
  let objs = await search12({ id: params.id });
  return (0, import_node20.json)(objs[0]);
}, action15 = async ({ request, params }) => (await erase12({ id: params.id }), (0, import_node20.redirect)("/projects"));

// app/routes/projects/update.$id.tsx
var update_id_exports5 = {};
__export(update_id_exports5, {
  action: () => action16,
  default: () => DeleteProject2,
  loader: () => loader15
});
var import_node21 = require("@remix-run/node"), import_react33 = require("@remix-run/react");

// app/ui-components/ProjectForm.tsx
var import_react32 = require("@remix-run/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function ProjectForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/ProjectForm.tsx",
    lineNumber: 8,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = "",
  organizationOptions = [],
  organization = { name: "" }
}) {
  let isToCreate = !name && !description;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react32.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(FieldsetLegend, { title: "project details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "project name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/ProjectForm.tsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the project",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/ProjectForm.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        LabelSelect,
        {
          defaultValue: organization.name,
          name: "organization",
          options: organizationOptions,
          tabIndex: 3
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/ProjectForm.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/ProjectForm.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName6(isToCreate, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/ProjectForm.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/ProjectForm.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var getButtonName6 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/projects/update.$id.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function DeleteProject2() {
  let isSubmitting = (0, import_react33.useTransition)().state === "submitting", data = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h2", { children: "Update Project" }, void 0, !1, {
        fileName: "app/routes/projects/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ProjectForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/projects/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader15 = async ({ request, params }) => {
  let objs = await search12({ id: params.id });
  return (0, import_node21.json)(objs[0]);
}, action16 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search12({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node21.redirect)("/projects");
};

// app/routes/projects/create.tsx
var create_exports5 = {};
__export(create_exports5, {
  action: () => action17,
  default: () => CreateProject,
  loader: () => loader16
});
var import_node22 = require("@remix-run/node"), import_react34 = require("@remix-run/react");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function CreateProject() {
  let organizations = (0, import_react34.useLoaderData)(), isSubmitting = (0, import_react34.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/create.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { children: "Create a Project" }, void 0, !1, {
        fileName: "app/routes/projects/create.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/create.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      ProjectForm,
      {
        organizationOptions: organizations,
        isSubmitting
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/create.tsx",
        lineNumber: 23,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/projects/create.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this);
}
var loader16 = async ({ request, params }) => {
  let { user } = await getUserSession(request), organizations = await search6({ createdByUserId: user.id });
  return (0, import_node22.json)(organizations);
}, action17 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description, organization } = sanitizeData({ formData: await request.formData() }), organizations = await search6({
    name: organization,
    createdByUserId: user.id
  });
  return await new Project({
    name,
    description,
    organization: organizations[0],
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node22.redirect)("/projects");
};

// app/routes/projects/index.tsx
var projects_exports2 = {};
__export(projects_exports2, {
  default: () => AllProjects,
  loader: () => loader17,
  meta: () => meta7
});
var import_node23 = require("@remix-run/node"), import_react35 = require("@remix-run/react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function AllProjects() {
  let rows = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { children: "All Projects" }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Rows5, { data: rows }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows5 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader17 = async ({ params }) => {
  let rows = await readAll5();
  return (0, import_node23.json)(rows);
}, meta7 = () => ({
  title: "Projects - Team Task Manager",
  description: "Projects page"
});

// app/routes/sign-out.tsx
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action18,
  default: () => SignOut,
  meta: () => meta8
});
var import_node24 = require("@remix-run/node"), import_react36 = require("@remix-run/react");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function SignOut() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { children: "Sign Out" }, void 0, !1, {
      fileName: "app/routes/sign-out.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react36.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("button", { children: "sign out" }, void 0, !1, {
      fileName: "app/routes/sign-out.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/sign-out.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-out.tsx",
    lineNumber: 7,
    columnNumber: 11
  }, this);
}
var action18 = async ({ request, params }) => {
  let { session } = await getUserSession(request);
  return (0, import_node24.redirect)("/", {
    headers: await destroyCookieHeader(session)
  });
}, meta8 = () => ({
  title: "Sign out - Team Task Manager",
  description: "Sign out page"
});

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => UserProfile,
  loader: () => loader18,
  meta: () => meta9
});
var import_node25 = require("@remix-run/node"), import_react37 = require("@remix-run/react");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function UserProfile() {
  let data = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_jsx_dev_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { children: "User Account" }, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h2", { children: "Profile" }, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: [
      "name: ",
      data.name
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: [
      "email: ",
      data.email
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.tsx",
    lineNumber: 13,
    columnNumber: 11
  }, this);
}
var loader18 = async ({ request, params }) => {
  let { session } = await getUserSession(request);
  return (0, import_node25.json)(session.data);
}, meta9 = () => ({
  title: "Profile - Team Task Manager",
  description: "Sign in page"
});

// app/routes/reports.tsx
var reports_exports = {};
__export(reports_exports, {
  default: () => Reports
});
var import_react38 = require("@remix-run/react"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function Reports() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react38.Outlet, {}, void 0, !1, {
    fileName: "app/routes/reports.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/reports.tsx",
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

// app/routes/reports/index.tsx
var reports_exports2 = {};
__export(reports_exports2, {
  default: () => AllReports,
  loader: () => loader19,
  meta: () => meta10
});
var import_node26 = require("@remix-run/node"), import_react39 = require("@remix-run/react");

// app/model/Report.tsx
var TABLE_NAME7 = "Reports", TABLE_ATTRIBUTES7 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Report(obj) {
  return this.set(obj);
}
function getAttributeValues7() {
  return TABLE_ATTRIBUTES7.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set7(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create14() {
  return await create13(this), this;
}
async function update14() {
  return await update13(this), this;
}
Object.assign(
  Report.prototype,
  {
    getAttributeValues: getAttributeValues7,
    set: set7,
    create: create14,
    update: update14
  }
);

// app/resource/Reports.tsx
async function create13(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES7.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME7} (${TABLE_ATTRIBUTES7.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll6() {
  let query = `SELECT * FROM ${TABLE_NAME7}`, [rows] = await db_default.execute(query);
  return await hydrate7(rows);
}
async function update13(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES7.length }, (_, index) => `${TABLE_ATTRIBUTES7[index]}=?`), query = `
    UPDATE ${TABLE_NAME7} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function hydrate7(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Report({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/routes/reports/index.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function AllReports() {
  let rows = (0, import_react39.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { children: "Reports" }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { children: "All Reports" }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/reports/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/reports/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Rows6, { data: rows }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/reports/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/reports/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows6 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/reports/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/reports/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader19 = async ({ params }) => {
  let rows = await readAll6();
  return (0, import_node26.json)(rows);
}, meta10 = () => ({
  title: "Reports - Team Task Manager",
  description: "Reports page"
});

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action19,
  default: () => SignIn,
  meta: () => meta11
});
var import_node27 = require("@remix-run/node"), import_react40 = require("@remix-run/react"), import_bcryptjs2 = __toESM(require("bcryptjs"));
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function SignIn() {
  let isSubmitting = (0, import_react40.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react40.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("legend", { children: "User details" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("label", { htmlFor: "input-email", children: "email" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("input", { type: "email", name: "email", id: "input-email", tabIndex: 1, placeholder: "email", required: !0 }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("label", { htmlFor: "input-password", children: "password" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("input", { type: "password", name: "password", id: "input-password", tabIndex: 2, placeholder: "password", required: !0 }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("button", { tabIndex: 3, disabled: isSubmitting, children: isSubmitting ? "submitting..." : "continue" }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 13,
    columnNumber: 11
  }, this);
}
var action19 = async ({ request, params }) => {
  let { session } = await getUserSession(request), { email, password } = sanitizeData({ formData: await request.formData() }), user = (await search2({ email }))[0];
  return await import_bcryptjs2.default.compare(password, user.hashPassword) ? (session.set("id", user.id), session.set("name", user.name), session.set("email", user.email), (0, import_node27.redirect)("/account", {
    headers: await setCookieHeader(session)
  })) : (session.flash("error", "Invalid username/password"), (0, import_node27.redirect)("/sign-in", {
    headers: await setCookieHeader(session)
  }));
}, meta11 = () => ({
  title: "Sign in - Team Task Manager",
  description: "Sign in page"
});

// app/routes/topics.tsx
var topics_exports = {};
__export(topics_exports, {
  default: () => Topics
});
var import_react41 = require("@remix-run/react"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Topics() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_jsx_dev_runtime45.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react41.Outlet, {}, void 0, !1, {
    fileName: "app/routes/topics.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/topics.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/topics/delete.$id.tsx
var delete_id_exports6 = {};
__export(delete_id_exports6, {
  action: () => action20,
  default: () => DeleteTopic,
  loader: () => loader20
});
var import_node28 = require("@remix-run/node"), import_react42 = require("@remix-run/react");

// app/resource/Topics.tsx
async function create15(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES8.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME8} (${TABLE_ATTRIBUTES8.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll7() {
  let query = `SELECT * FROM ${TABLE_NAME8}`, [rows] = await db_default.execute(query);
  return await hydrate8(rows);
}
async function update15(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES8.length }, (_, index) => `${TABLE_ATTRIBUTES8[index]}=?`), query = `
    UPDATE ${TABLE_NAME8} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase14(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME8}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search14(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME8}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate8(rows);
}
async function hydrate8(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Topic({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Topic.tsx
var TABLE_NAME8 = "Topics", TABLE_ATTRIBUTES8 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Topic(obj) {
  return this.set(obj);
}
function getAttributeValues8() {
  return TABLE_ATTRIBUTES8.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      case "assignedToUserId":
        return this.assignedTo.id;
      default:
        return this[attribute];
    }
  });
}
function set8(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create16() {
  return await create15(this), this;
}
async function search15(criteriaObj) {
  return (await search14(criteriaObj)).map((row) => new Topic(row));
}
async function update16() {
  return await update15(this), this;
}
async function erase15(criteriaObj) {
  await erase14(criteriaObj);
}
Object.assign(
  Topic.prototype,
  {
    getAttributeValues: getAttributeValues8,
    set: set8,
    create: create16,
    update: update16
  }
);

// app/routes/topics/delete.$id.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function DeleteTopic() {
  let isSubmitting = (0, import_react42.useTransition)().state === "submitting", data = (0, import_react42.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h2", { children: "Delete Topic" }, void 0, !1, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/topics/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react42.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/topics/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader20 = async ({ request, params }) => {
  let objs = await search15({ id: params.id });
  return (0, import_node28.json)(objs[0]);
}, action20 = async ({ request, params }) => (await erase15({ id: params.id }), (0, import_node28.redirect)("/topics"));

// app/routes/topics/update.$id.tsx
var update_id_exports6 = {};
__export(update_id_exports6, {
  action: () => action21,
  default: () => UpdateTopic,
  loader: () => loader21
});
var import_node29 = require("@remix-run/node"), import_react44 = require("@remix-run/react");

// app/ui-components/TopicForm.tsx
var import_react43 = require("@remix-run/react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function TopicForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TopicForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react43.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(FieldsetLegend, { title: "topic details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "topic name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TopicForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the topic",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TopicForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/TopicForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      "button",
      {
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName7(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/TopicForm.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/TopicForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var getButtonName7 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/topics/update.$id.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function UpdateTopic() {
  let isSubmitting = (0, import_react44.useTransition)().state === "submitting", data = (0, import_react44.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_jsx_dev_runtime48.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h2", { children: "Update Topic" }, void 0, !1, {
        fileName: "app/routes/topics/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(TopicForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/topics/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader21 = async ({ request, params }) => {
  let objs = await search15({ id: params.id });
  return (0, import_node29.json)(objs[0]);
}, action21 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search15({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node29.redirect)("/topics");
};

// app/routes/topics/create.tsx
var create_exports6 = {};
__export(create_exports6, {
  action: () => action22,
  default: () => CreateTopic2
});
var import_node30 = require("@remix-run/node"), import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function CreateTopic2() {
  let isSubmitting = (0, import_react45.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_jsx_dev_runtime49.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h2", { children: "Create Topic" }, void 0, !1, {
        fileName: "app/routes/topics/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(TopicForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/topics/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action22 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return await new Topic({
    name,
    description,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node30.redirect)("/topics");
};

// app/routes/topics/index.tsx
var topics_exports2 = {};
__export(topics_exports2, {
  default: () => AllTopics,
  loader: () => loader22,
  meta: () => meta12
});
var import_node31 = require("@remix-run/node"), import_react46 = require("@remix-run/react");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function AllTopics() {
  let rows = (0, import_react46.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { children: "All Topics" }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/topics/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(Rows7, { data: rows }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this);
}
var Rows7 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 66,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 59,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), loader22 = async ({ params }) => {
  let rows = await readAll7();
  return (0, import_node31.json)(rows);
}, meta12 = () => ({
  title: "Topics - Team Task Manager",
  description: "Topics page"
});

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h1", { children: "Welcome to Team Task Manager" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/roles.tsx
var roles_exports = {};
__export(roles_exports, {
  default: () => Roles
});
var import_react47 = require("@remix-run/react"), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function Roles() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_jsx_dev_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react47.Outlet, {}, void 0, !1, {
    fileName: "app/routes/roles.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/roles.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/roles/delete.$id.tsx
var delete_id_exports7 = {};
__export(delete_id_exports7, {
  action: () => action23,
  default: () => DeleteRole,
  loader: () => loader23
});
var import_node32 = require("@remix-run/node"), import_react48 = require("@remix-run/react");

// app/resource/Roles.tsx
async function create17(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES9.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME9} (${TABLE_ATTRIBUTES9.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll8() {
  let query = `SELECT * FROM ${TABLE_NAME9}`, [rows] = await db_default.execute(query);
  return await hydrate9(rows);
}
async function update17(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES9.length }, (_, index) => `${TABLE_ATTRIBUTES9[index]}=?`), query = `
    UPDATE ${TABLE_NAME9} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase16(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME9}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search16(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME9}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate9(rows);
}
async function hydrate9(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    organizationId,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let organizations = await search5({ id: organizationId }), createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId });
    return new Role({
      id,
      name,
      description,
      organization: organizations[0],
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Role.tsx
var TABLE_NAME9 = "Roles", TABLE_ATTRIBUTES9 = [
  "name",
  "description",
  "organizationId",
  "createdByUserId",
  "updatedByUserId"
];
function Role(obj) {
  return this.set(obj);
}
function getAttributeValues9() {
  return TABLE_ATTRIBUTES9.map((attribute) => {
    switch (attribute) {
      case "organizationId":
        return this.organization.id;
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      default:
        return this[attribute];
    }
  });
}
function set9(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create18() {
  return await create17(this), this;
}
async function search17(criteriaObj) {
  return await search16(criteriaObj);
}
async function update18() {
  return await update17(this), this;
}
async function erase17(criteriaObj) {
  await erase16(criteriaObj);
}
Object.assign(
  Role.prototype,
  {
    getAttributeValues: getAttributeValues9,
    set: set9,
    create: create18,
    update: update18
  }
);

// app/routes/roles/delete.$id.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function DeleteRole() {
  let isSubmitting = (0, import_react48.useTransition)().state === "submitting", data = (0, import_react48.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_jsx_dev_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("h2", { children: "Delete Role" }, void 0, !1, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("b", { children: "organization:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("td", { children: data.organization.name }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 34,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/roles/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react48.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/roles/delete.$id.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/roles/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader23 = async ({ request, params }) => {
  let objs = await search17({ id: params.id });
  return (0, import_node32.json)(objs[0]);
}, action23 = async ({ request, params }) => (await erase17({ id: params.id }), (0, import_node32.redirect)("/roles"));

// app/routes/roles/update.$id.tsx
var update_id_exports7 = {};
__export(update_id_exports7, {
  action: () => action24,
  default: () => DeleteRole2,
  loader: () => loader24
});
var import_node33 = require("@remix-run/node"), import_react50 = require("@remix-run/react");

// app/ui-components/RoleForm.tsx
var import_react49 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function RoleForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_jsx_dev_runtime54.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/RoleForm.tsx",
    lineNumber: 8,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = "",
  organization = { id: "", name: "" },
  organizationOptions = []
}) {
  let isToCreate = !name && !description && !(organization != null && organization.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react49.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(FieldsetLegend, { title: "role details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "role name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/RoleForm.tsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the role",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/RoleForm.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        LabelSelect,
        {
          defaultValue: organization.id,
          name: "organization",
          options: organizationOptions,
          tabIndex: 3
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/RoleForm.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/RoleForm.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
      "button",
      {
        tabIndex: 4,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName8(isToCreate, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/RoleForm.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/RoleForm.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var getButtonName8 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/roles/update.$id.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function DeleteRole2() {
  let isSubmitting = (0, import_react50.useTransition)().state === "submitting", data = (0, import_react50.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_jsx_dev_runtime55.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h2", { children: "Update Role" }, void 0, !1, {
        fileName: "app/routes/roles/update.$id.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/update.$id.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      RoleForm,
      {
        ...data.role,
        organizationOptions: data.organizations,
        isSubmitting
      },
      void 0,
      !1,
      {
        fileName: "app/routes/roles/update.$id.tsx",
        lineNumber: 20,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/roles/update.$id.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var loader24 = async ({ request, params }) => {
  let { user } = await getUserSession(request), roles = await search17({ id: params.id }), organizations = await search6({ createdByUserId: user.id });
  return (0, import_node33.json)({
    role: roles[0],
    organizations
  });
}, action24 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search17({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node33.redirect)("/roles");
};

// app/routes/roles/create.tsx
var create_exports7 = {};
__export(create_exports7, {
  action: () => action25,
  default: () => CreateRole,
  loader: () => loader25
});
var import_node34 = require("@remix-run/node"), import_react51 = require("@remix-run/react");
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function CreateRole() {
  let organizations = (0, import_react51.useLoaderData)(), isSubmitting = (0, import_react51.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_jsx_dev_runtime56.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/create.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("h2", { children: "Create a Role" }, void 0, !1, {
        fileName: "app/routes/roles/create.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/create.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      RoleForm,
      {
        isSubmitting,
        organizationOptions: organizations
      },
      void 0,
      !1,
      {
        fileName: "app/routes/roles/create.tsx",
        lineNumber: 23,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/roles/create.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this);
}
var loader25 = async ({ request, params }) => {
  let { user } = await getUserSession(request), organizations = await search6({ createdByUserId: user.id });
  return (0, import_node34.json)(organizations);
}, action25 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description, organization } = sanitizeData({ formData: await request.formData() }), organizations = await search6({
    id: organization,
    createdByUserId: user.id
  });
  return await new Role({
    name,
    description,
    organization: organizations[0],
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node34.redirect)("/roles");
};

// app/routes/roles/index.tsx
var roles_exports2 = {};
__export(roles_exports2, {
  default: () => AllRoles,
  loader: () => loader26,
  meta: () => meta13
});
var import_node35 = require("@remix-run/node"), import_react52 = require("@remix-run/react");
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function AllRoles() {
  let rows = (0, import_react52.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_jsx_dev_runtime57.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h2", { children: "All Roles" }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/index.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "organization" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Rows8, { data: rows }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/roles/index.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 25,
    columnNumber: 11
  }, this);
}
var Rows8 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  organization,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: organization.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 68,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 69,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 70,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 70,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 71,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 71,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/roles/index.tsx",
  lineNumber: 63,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/roles/index.tsx",
  lineNumber: 50,
  columnNumber: 11
}, this), loader26 = async ({ params }) => {
  let rows = await readAll8();
  return (0, import_node35.json)(rows);
}, meta13 = () => ({
  title: "Roles - Team Task Manager",
  description: "Roles page"
});

// app/routes/tasks.tsx
var tasks_exports = {};
__export(tasks_exports, {
  default: () => Tasks
});
var import_react53 = require("@remix-run/react"), import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function Tasks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react53.Outlet, {}, void 0, !1, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/tasks/delete.$id.tsx
var delete_id_exports8 = {};
__export(delete_id_exports8, {
  action: () => action26,
  default: () => DeleteTask,
  loader: () => loader27
});
var import_node36 = require("@remix-run/node"), import_react54 = require("@remix-run/react");

// app/resource/Tasks.tsx
async function create19(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES10.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME10} (${TABLE_ATTRIBUTES10.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll9() {
  let query = `SELECT * FROM ${TABLE_NAME10}`, [rows] = await db_default.execute(query);
  return await hydrate10(rows);
}
async function update19(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES10.length }, (_, index) => `${TABLE_ATTRIBUTES10[index]}=?`), query = `
    UPDATE ${TABLE_NAME10} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}
async function erase18(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME10}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function search18(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME10}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate10(rows);
}
async function hydrate10(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    assignedToUserId,
    taskStatusId,
    isImportant,
    isUrgent,
    timeEstimate,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search2({ id: createdByUserId }), updatedByUsers = await search2({ id: updatedByUserId }), assignedToUsers = await search2({ id: assignedToUserId }), taskStatuses = await search4({ id: taskStatusId });
    return new Task({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      assignedTo: assignedToUsers[0],
      taskStatus: taskStatuses[0],
      isImportant,
      isUrgent,
      timeEstimate,
      createdAt,
      updatedAt
    });
  }));
}

// app/model/Task.tsx
var TABLE_NAME10 = "Tasks", TABLE_ATTRIBUTES10 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId",
  "assignedToUserId",
  "taskStatusId",
  "isImportant",
  "isUrgent",
  "timeEstimate"
];
function Task(obj) {
  return this.set(obj);
}
function getAttributeValues10() {
  return TABLE_ATTRIBUTES10.map((attribute) => {
    switch (attribute) {
      case "createdByUserId":
        return this.createdBy.id;
      case "updatedByUserId":
        return this.updatedBy.id;
      case "assignedToUserId":
        return this.assignedTo.id;
      case "taskStatusId":
        return this.taskStatus.id;
      default:
        return this[attribute];
    }
  });
}
function set10(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create20() {
  try {
    await create19(this);
  } catch (error) {
    console.error("createTask error", error);
  }
  return this;
}
async function search19(criteriaObj) {
  return (await search18(criteriaObj)).map((row) => new Task(row));
}
async function update20() {
  return await update19(this), this;
}
async function erase19(criteriaObj) {
  await erase18(criteriaObj);
}
Object.assign(
  Task.prototype,
  {
    getAttributeValues: getAttributeValues10,
    set: set10,
    create: create20,
    update: update20
  }
);

// app/routes/tasks/delete.$id.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function DeleteTask() {
  let isSubmitting = (0, import_react54.useTransition)().state === "submitting", data = (0, import_react54.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_jsx_dev_runtime59.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("h2", { children: "Delete Task" }, void 0, !1, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react54.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader27 = async ({ request, params }) => {
  let objs = await search19({ id: params.id });
  return (0, import_node36.json)(objs[0]);
}, action26 = async ({ request, params }) => (await erase19({ id: params.id }), (0, import_node36.redirect)("/tasks"));

// app/routes/tasks/update.$id.tsx
var update_id_exports8 = {};
__export(update_id_exports8, {
  action: () => action27,
  default: () => UpdateTask,
  loader: () => loader28
});
var import_node37 = require("@remix-run/node");
var import_react56 = require("@remix-run/react");

// app/ui-components/TaskForm.tsx
var import_react55 = require("@remix-run/react");
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), level = [{
  id: 0,
  name: "Low"
}, {
  id: 1,
  name: "High"
}];
function TaskForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_jsx_dev_runtime60.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TaskForm.tsx",
    lineNumber: 16,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = "",
  users = [],
  taskStatus = {},
  timeEstimate = 0,
  assignedTo = {},
  isImportant = 0,
  isUrgent = 0
}) {
  let isToCreate = !name && !description;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react55.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(FieldsetLegend, { title: "task details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelInput,
        {
          defaultValue: name,
          name: "name",
          placeholder: "task name",
          required: !0,
          tabIndex: 1,
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the task",
          required: !1,
          tabIndex: 2
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelInput,
        {
          defaultValue: `${timeEstimate}`,
          name: "time-estimate",
          placeholder: "in hours",
          required: !1,
          tabIndex: 3,
          type: "number"
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelSelect,
        {
          defaultValue: assignedTo.id,
          name: "assign-to",
          options: users,
          tabIndex: 4
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelSelect,
        {
          defaultValue: taskStatus.id,
          name: "status",
          options: taskStatus,
          tabIndex: 5
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelSelect,
        {
          defaultValue: isImportant,
          name: "importance",
          options: level,
          tabIndex: 6
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 67,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
        LabelSelect,
        {
          defaultValue: isUrgent,
          name: "urgency",
          options: level,
          tabIndex: 7
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/TaskForm.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
      "button",
      {
        type: "submit",
        tabIndex: 3,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName9(isToCreate, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/TaskForm.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/TaskForm.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var getButtonName9 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/tasks/update.$id.tsx
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function UpdateTask() {
  let { users, taskStatus, task } = (0, import_react56.useLoaderData)(), isSubmitting = (0, import_react56.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_jsx_dev_runtime61.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/update.$id.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("h2", { children: "Update Task" }, void 0, !1, {
        fileName: "app/routes/tasks/update.$id.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TaskForm, { ...task, users, taskStatus, isSubmitting }, void 0, !1, {
      fileName: "app/routes/tasks/update.$id.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/update.$id.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this);
}
var loader28 = async ({ request, params }) => {
  let objs = await search19({ id: params.id }), users = await readAll(), taskStatus = await readAll2();
  return (0, import_node37.json)({
    users,
    taskStatus,
    task: objs[0]
  });
}, action27 = async ({ request, params }) => {
  let { user } = await getUserSession(request), {
    name,
    description,
    status,
    importance,
    urgency,
    ...values
  } = sanitizeData({ formData: await request.formData() }), searchedUsers = await search2({ id: values["assign-to"] }), taskStatuses = await search4({ id: status });
  return (await search19({ id: params.id }))[0].set({
    name,
    description,
    timeEstimate: values["time-estimate"],
    assignedTo: searchedUsers[0],
    taskStatus: taskStatuses[0],
    isImportant: importance,
    isUrgent: urgency,
    createdBy: user,
    updatedBy: user
  }).update(), (0, import_node37.redirect)("/tasks");
};

// app/routes/tasks/create.tsx
var create_exports8 = {};
__export(create_exports8, {
  action: () => action28,
  default: () => CreateTask,
  loader: () => loader29
});
var import_node38 = require("@remix-run/node"), import_react57 = require("@remix-run/react");
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime");
function CreateTask() {
  let { users, taskStatus } = (0, import_react57.useLoaderData)(), isSubmitting = (0, import_react57.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_jsx_dev_runtime62.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h2", { children: "Create a Task" }, void 0, !1, {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/create.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
      TaskForm,
      {
        isSubmitting,
        users,
        taskStatus
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 25,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/create.tsx",
    lineNumber: 20,
    columnNumber: 11
  }, this);
}
var loader29 = async ({ request, params }) => {
  let users = await readAll(), taskStatus = await readAll2();
  return (0, import_node38.json)({
    users,
    taskStatus
  });
}, action28 = async ({ request, params }) => {
  let { user } = await getUserSession(request), {
    name,
    description,
    status,
    importance,
    urgency,
    ...values
  } = sanitizeData({ formData: await request.formData() }), searchedUsers = await search2({ id: values["assign-to"] }), taskStatuses = await search4({ id: status });
  return await new Task({
    name,
    description,
    timeEstimate: values["time-estimate"],
    assignedTo: searchedUsers[0],
    taskStatus: taskStatuses[0],
    isImportant: importance,
    isUrgent: urgency,
    createdBy: user,
    updatedBy: user
  }).create(), (0, import_node38.redirect)("/tasks");
};

// app/routes/tasks/index.tsx
var tasks_exports2 = {};
__export(tasks_exports2, {
  default: () => AllTasks,
  loader: () => loader30,
  meta: () => meta14
});
var import_node39 = require("@remix-run/node"), import_react58 = require("@remix-run/react");
var import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function AllTasks() {
  let rows = (0, import_react58.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_jsx_dev_runtime63.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("h2", { children: "All Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "assigned to" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "status" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "important" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "urgent" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "time estimate" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/tasks/index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(Rows9, { data: rows }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 29,
    columnNumber: 11
  }, this);
}
var Rows9 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  assignedTo,
  taskStatus,
  isImportant,
  isUrgent,
  timeEstimate,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 76,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 77,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 78,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: assignedTo.name }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 79,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: taskStatus.name }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 80,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: isImportant }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 81,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: isUrgent }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 82,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: timeEstimate }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 83,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 84,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 85,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 86,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 86,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 87,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 87,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/tasks/index.tsx",
  lineNumber: 75,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/tasks/index.tsx",
  lineNumber: 58,
  columnNumber: 11
}, this), loader30 = async ({ params }) => {
  let rows = await readAll9();
  return (0, import_node39.json)(rows);
}, meta14 = () => ({
  title: "Tasks - Team Task Manager",
  description: "Tasks page"
});

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Users
});
var import_react59 = require("@remix-run/react"), import_jsx_dev_runtime64 = require("react/jsx-dev-runtime");
function Users() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react59.Outlet, {}, void 0, !1, {
    fileName: "app/routes/users.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/users.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/users/delete.$id.tsx
var delete_id_exports9 = {};
__export(delete_id_exports9, {
  action: () => action29,
  default: () => DeleteUser,
  loader: () => loader31
});
var import_node40 = require("@remix-run/node"), import_react60 = require("@remix-run/react");
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime");
function DeleteUser() {
  let isSubmitting = (0, import_react60.useTransition)().state === "submitting", data = (0, import_react60.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_jsx_dev_runtime65.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("h2", { children: "Delete user" }, void 0, !1, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("b", { children: "email:" }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)("td", { children: data.email }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/users/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_react60.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
      "button",
      {
        tabIndex: 1,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: isSubmitting ? "submitting..." : "delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/users/delete.$id.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader31 = async ({ request, params }) => {
  let objs = await search2({ id: params.id });
  return (0, import_node40.json)(objs[0]);
}, action29 = async ({ request, params }) => (await erase2({ id: params.id }), (0, import_node40.redirect)("/users"));

// app/routes/users/update.$id.tsx
var update_id_exports9 = {};
__export(update_id_exports9, {
  action: () => action30,
  default: () => DeleteUser2,
  loader: () => loader32
});
var import_node41 = require("@remix-run/node"), import_react61 = require("@remix-run/react");
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime");
function DeleteUser2() {
  let isSubmitting = (0, import_react61.useTransition)().state === "submitting", data = (0, import_react61.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_jsx_dev_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("h2", { children: "Update User" }, void 0, !1, {
        fileName: "app/routes/users/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(UserForm, { ...data, isSubmitting }, void 0, !1, {
      fileName: "app/routes/users/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/update.$id.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}
var loader32 = async ({ request, params }) => {
  let objs = await search2({ id: params.id });
  return (0, import_node41.json)(objs[0]);
}, action30 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search2({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node41.redirect)("/users");
};

// app/routes/users/create.tsx
var create_exports9 = {};
__export(create_exports9, {
  action: () => action31,
  default: () => CreateUser,
  meta: () => meta15
});
var import_node42 = require("@remix-run/node"), import_react62 = require("@remix-run/react"), import_bcryptjs3 = __toESM(require("bcryptjs"));
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime");
function CreateUser() {
  let isSubmitting = (0, import_react62.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(import_jsx_dev_runtime67.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h2", { children: "Create a User" }, void 0, !1, {
        fileName: "app/routes/users/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(UserForm, { isSubmitting }, void 0, !1, {
      fileName: "app/routes/users/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/create.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var action31 = async ({ request, params }) => {
  let { name, email, password } = sanitizeData({ formData: await request.formData() }), hashPassword = await import_bcryptjs3.default.hash(password, 10);
  return await create({
    name,
    email,
    hashPassword
  }), (0, import_node42.redirect)("/users");
}, meta15 = () => ({
  title: "Create User - Team Task Manager",
  description: "Create user page"
});

// app/routes/users/index.tsx
var users_exports2 = {};
__export(users_exports2, {
  default: () => AllUsers,
  loader: () => loader33,
  meta: () => meta16
});
var import_node43 = require("@remix-run/node"), import_react63 = require("@remix-run/react");
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime");
function AllUsers() {
  let rows = (0, import_react63.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(import_jsx_dev_runtime68.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("h2", { children: "All Users" }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/index.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "col", children: "email" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(Rows10, { data: rows }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/index.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(BasicNavLink, { role: "button", to: "./create", children: "create" }, void 0, !1, {
      fileName: "app/routes/users/index.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader33 = async ({ params }) => {
  let rows = await readAll();
  return (0, import_node43.json)(rows);
}, Rows10 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  email
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("td", { children: email }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 62,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 63,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/users/index.tsx",
  lineNumber: 58,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/users/index.tsx",
  lineNumber: 48,
  columnNumber: 11
}, this), meta16 = () => ({
  title: "Users - Team Task Manager",
  description: "Users page"
});

// app/routes/logs.tsx
var logs_exports = {};
__export(logs_exports, {
  default: () => Logs
});
var import_react64 = require("@remix-run/react"), import_jsx_dev_runtime69 = require("react/jsx-dev-runtime");
function Logs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_jsx_dev_runtime69.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_react64.Outlet, {}, void 0, !1, {
    fileName: "app/routes/logs.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/logs.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/routes/logs/index.tsx
var logs_exports2 = {};
__export(logs_exports2, {
  default: () => AllLogs,
  loader: () => loader34,
  meta: () => meta17
});
var import_node44 = require("@remix-run/node"), import_react65 = require("@remix-run/react");

// app/model/Log.tsx
var TABLE_NAME11 = "Logs", TABLE_ATTRIBUTES11 = [
  "message",
  "userId",
  "organizationId",
  "projectId",
  "topicId",
  "resourceId",
  "taskId"
];
function Log(obj) {
  return this.set(obj);
}
function getAttributeValues11() {
  return TABLE_ATTRIBUTES11.map((attribute) => {
    switch (attribute) {
      case "userId":
        return this.user.id;
      case "organizationId":
        return this.organization.id;
      case "projectId":
        return this.project.id;
      case "topicId":
        return this.topic.id;
      case "resourceId":
        return this.resource.id;
      case "taskId":
        return this.task.id;
      default:
        return this[attribute];
    }
  });
}
function set11(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create22() {
  return await create21(this), this;
}
async function update22() {
  return await update21(this), this;
}
Object.assign(
  Log.prototype,
  {
    getAttributeValues: getAttributeValues11,
    set: set11,
    create: create22,
    update: update22
  }
);

// app/resource/Logs.tsx
async function create21(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES11.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME11} (${TABLE_ATTRIBUTES11.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll10() {
  let query = `SELECT * FROM ${TABLE_NAME11}`, [rows] = await db_default.execute(query);
  return rows.map((row) => new Log(row));
}
async function update21(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES11.length }, (_, index) => `${TABLE_ATTRIBUTES11[index]}=?`), query = `
    UPDATE ${TABLE_NAME11} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}

// app/routes/logs/index.tsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime");
function AllLogs() {
  let rows = (0, import_react65.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_jsx_dev_runtime70.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("h1", { children: "Logs" }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("h2", { children: "All Logs" }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/logs/index.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Rows11, { data: rows }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/logs/index.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 22,
    columnNumber: 11
  }, this);
}
var Rows11 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdByUserId,
  updatedByUserId
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 58,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: createdByUserId }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: updatedByUserId }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(BasicNavLink, { to: `./update/${id}`, children: "update" }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 63,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(BasicNavLink, { to: `./delete/${id}`, children: "delete" }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 64,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/logs/index.tsx",
  lineNumber: 57,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/logs/index.tsx",
  lineNumber: 45,
  columnNumber: 11
}, this), loader34 = async ({ params }) => {
  let rows = await readAll10();
  return (0, import_node44.json)(rows);
}, meta17 = () => ({
  title: "Logs - Team Task Manager",
  description: "Logs page"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9c2fec96", entry: { module: "/build/entry.client-2KAGL3L2.js", imports: ["/build/_shared/chunk-DKVKA4ZF.js", "/build/_shared/chunk-CAPFXHAK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VHHQR4T3.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-663NVLHA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create-an-account": { id: "routes/create-an-account", parentId: "root", path: "create-an-account", index: void 0, caseSensitive: void 0, module: "/build/routes/create-an-account-YEUBGUOM.js", imports: ["/build/_shared/chunk-IKZE5LF2.js", "/build/_shared/chunk-BXQEXROM.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WVN2OHON.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs": { id: "routes/logs", parentId: "root", path: "logs", index: void 0, caseSensitive: void 0, module: "/build/routes/logs-3KXNT3SB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/index": { id: "routes/logs/index", parentId: "routes/logs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/logs/index-NKBQGBWA.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations": { id: "routes/organizations", parentId: "root", path: "organizations", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations-B7SL2MYT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/create": { id: "routes/organizations/create", parentId: "routes/organizations", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/create-NDQKLBNK.js", imports: ["/build/_shared/chunk-EEC2YZII.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/delete.$id": { id: "routes/organizations/delete.$id", parentId: "routes/organizations", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/delete.$id-IVCKWAX3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/index": { id: "routes/organizations/index", parentId: "routes/organizations", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/organizations/index-LQAW6I24.js", imports: ["/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-WVITZEPA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/update.$id": { id: "routes/organizations/update.$id", parentId: "routes/organizations", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/update.$id-YIA7YVTV.js", imports: ["/build/_shared/chunk-EEC2YZII.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions": { id: "routes/permissions", parentId: "root", path: "permissions", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions-S6YR3ET2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/create": { id: "routes/permissions/create", parentId: "routes/permissions", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/create-GBX3VSN7.js", imports: ["/build/_shared/chunk-OBLJHPWF.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/delete.$id": { id: "routes/permissions/delete.$id", parentId: "routes/permissions", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/delete.$id-4VVSF7YM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/index": { id: "routes/permissions/index", parentId: "routes/permissions", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/permissions/index-JKHTH3KI.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/update.$id": { id: "routes/permissions/update.$id", parentId: "routes/permissions", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/update.$id-NQ4JC6B6.js", imports: ["/build/_shared/chunk-OBLJHPWF.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-L45OCKDH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/create": { id: "routes/projects/create", parentId: "routes/projects", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/create-LEHBTOTM.js", imports: ["/build/_shared/chunk-4VZKMHJP.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/delete.$id": { id: "routes/projects/delete.$id", parentId: "routes/projects", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/delete.$id-E4UCNZFT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "routes/projects", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-KQOCM2NZ.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/update.$id": { id: "routes/projects/update.$id", parentId: "routes/projects", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/update.$id-TBX7KLV2.js", imports: ["/build/_shared/chunk-4VZKMHJP.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports": { id: "routes/reports", parentId: "root", path: "reports", index: void 0, caseSensitive: void 0, module: "/build/routes/reports-UR3P27LQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports/index": { id: "routes/reports/index", parentId: "routes/reports", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/reports/index-374WI2UK.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources": { id: "routes/resources", parentId: "root", path: "resources", index: void 0, caseSensitive: void 0, module: "/build/routes/resources-KBVDMSL2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/create": { id: "routes/resources/create", parentId: "routes/resources", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/create-T4Z7AKYN.js", imports: ["/build/_shared/chunk-2CMZTNYS.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/delete.$id": { id: "routes/resources/delete.$id", parentId: "routes/resources", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/delete.$id-6BBR6ZS3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/index": { id: "routes/resources/index", parentId: "routes/resources", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/resources/index-PNGXWKVW.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/update.$id": { id: "routes/resources/update.$id", parentId: "routes/resources", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/update.$id-RQAIFLL7.js", imports: ["/build/_shared/chunk-2CMZTNYS.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles": { id: "routes/roles", parentId: "root", path: "roles", index: void 0, caseSensitive: void 0, module: "/build/routes/roles-MADUKG5W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/create": { id: "routes/roles/create", parentId: "routes/roles", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/create-RP7PDHWI.js", imports: ["/build/_shared/chunk-ICK52LD3.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/delete.$id": { id: "routes/roles/delete.$id", parentId: "routes/roles", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/delete.$id-XLT6J2TS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/index": { id: "routes/roles/index", parentId: "routes/roles", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/roles/index-RCZR6YA4.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/update.$id": { id: "routes/roles/update.$id", parentId: "routes/roles", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/update.$id-456ETQN3.js", imports: ["/build/_shared/chunk-ICK52LD3.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-5QDAKPRB.js", imports: ["/build/_shared/chunk-BXQEXROM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-out": { id: "routes/sign-out", parentId: "root", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-out-4X7KWJTG.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks": { id: "routes/tasks", parentId: "root", path: "tasks", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks-KS6UVXIE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/create": { id: "routes/tasks/create", parentId: "routes/tasks", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/create-JFVRHFSV.js", imports: ["/build/_shared/chunk-OIA5LAYG.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/delete.$id": { id: "routes/tasks/delete.$id", parentId: "routes/tasks", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/delete.$id-VWY3YZV7.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/index": { id: "routes/tasks/index", parentId: "routes/tasks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/tasks/index-URM73NXS.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/update.$id": { id: "routes/tasks/update.$id", parentId: "routes/tasks", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/update.$id-F3LIEJQK.js", imports: ["/build/_shared/chunk-OIA5LAYG.js", "/build/_shared/chunk-SMYZSH65.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/create": { id: "routes/taskstatus/create", parentId: "root", path: "taskstatus/create", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/create-6IQQHQMU.js", imports: ["/build/_shared/chunk-MWJKY3HD.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/delete.$id": { id: "routes/taskstatus/delete.$id", parentId: "root", path: "taskstatus/delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/delete.$id-3ZYAIZ4Z.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/index": { id: "routes/taskstatus/index", parentId: "root", path: "taskstatus", index: !0, caseSensitive: void 0, module: "/build/routes/taskstatus/index-MWLU2YNK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/update.$id": { id: "routes/taskstatus/update.$id", parentId: "root", path: "taskstatus/update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/update.$id-2PENK664.js", imports: ["/build/_shared/chunk-MWJKY3HD.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics": { id: "routes/topics", parentId: "root", path: "topics", index: void 0, caseSensitive: void 0, module: "/build/routes/topics-XNEI6YGN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/create": { id: "routes/topics/create", parentId: "routes/topics", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/create-CU2TS7C7.js", imports: ["/build/_shared/chunk-LLM7AME3.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/delete.$id": { id: "routes/topics/delete.$id", parentId: "routes/topics", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/delete.$id-72M3ORWF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/index": { id: "routes/topics/index", parentId: "routes/topics", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/topics/index-XA3XLNGK.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/update.$id": { id: "routes/topics/update.$id", parentId: "routes/topics", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/update.$id-EW6VZLVD.js", imports: ["/build/_shared/chunk-LLM7AME3.js", "/build/_shared/chunk-2RBICJPK.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-ZG7Y3DYE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/create": { id: "routes/users/create", parentId: "routes/users", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/users/create-YQDTJWVH.js", imports: ["/build/_shared/chunk-IKZE5LF2.js", "/build/_shared/chunk-BXQEXROM.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/delete.$id": { id: "routes/users/delete.$id", parentId: "routes/users", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users/delete.$id-NKEKVIWR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/index": { id: "routes/users/index", parentId: "routes/users", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/users/index-TCLWIRTQ.js", imports: ["/build/_shared/chunk-WVITZEPA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/update.$id": { id: "routes/users/update.$id", parentId: "routes/users", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users/update.$id-T6DIZLRA.js", imports: ["/build/_shared/chunk-IKZE5LF2.js", "/build/_shared/chunk-FZMGPDXM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9C2FEC96.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/taskstatus/delete.$id": {
    id: "routes/taskstatus/delete.$id",
    parentId: "root",
    path: "taskstatus/delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports
  },
  "routes/taskstatus/update.$id": {
    id: "routes/taskstatus/update.$id",
    parentId: "root",
    path: "taskstatus/update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports
  },
  "routes/create-an-account": {
    id: "routes/create-an-account",
    parentId: "root",
    path: "create-an-account",
    index: void 0,
    caseSensitive: void 0,
    module: create_an_account_exports
  },
  "routes/taskstatus/create": {
    id: "routes/taskstatus/create",
    parentId: "root",
    path: "taskstatus/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/taskstatus/index": {
    id: "routes/taskstatus/index",
    parentId: "root",
    path: "taskstatus",
    index: !0,
    caseSensitive: void 0,
    module: taskstatus_exports
  },
  "routes/organizations": {
    id: "routes/organizations",
    parentId: "root",
    path: "organizations",
    index: void 0,
    caseSensitive: void 0,
    module: organizations_exports
  },
  "routes/organizations/delete.$id": {
    id: "routes/organizations/delete.$id",
    parentId: "routes/organizations",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports2
  },
  "routes/organizations/update.$id": {
    id: "routes/organizations/update.$id",
    parentId: "routes/organizations",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports2
  },
  "routes/organizations/create": {
    id: "routes/organizations/create",
    parentId: "routes/organizations",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports2
  },
  "routes/organizations/index": {
    id: "routes/organizations/index",
    parentId: "routes/organizations",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: organizations_exports2
  },
  "routes/permissions": {
    id: "routes/permissions",
    parentId: "root",
    path: "permissions",
    index: void 0,
    caseSensitive: void 0,
    module: permissions_exports
  },
  "routes/permissions/delete.$id": {
    id: "routes/permissions/delete.$id",
    parentId: "routes/permissions",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports3
  },
  "routes/permissions/update.$id": {
    id: "routes/permissions/update.$id",
    parentId: "routes/permissions",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports3
  },
  "routes/permissions/create": {
    id: "routes/permissions/create",
    parentId: "routes/permissions",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports3
  },
  "routes/permissions/index": {
    id: "routes/permissions/index",
    parentId: "routes/permissions",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: permissions_exports2
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/resources/delete.$id": {
    id: "routes/resources/delete.$id",
    parentId: "routes/resources",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports4
  },
  "routes/resources/update.$id": {
    id: "routes/resources/update.$id",
    parentId: "routes/resources",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports4
  },
  "routes/resources/create": {
    id: "routes/resources/create",
    parentId: "routes/resources",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports4
  },
  "routes/resources/index": {
    id: "routes/resources/index",
    parentId: "routes/resources",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: resources_exports2
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/projects/delete.$id": {
    id: "routes/projects/delete.$id",
    parentId: "routes/projects",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports5
  },
  "routes/projects/update.$id": {
    id: "routes/projects/update.$id",
    parentId: "routes/projects",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports5
  },
  "routes/projects/create": {
    id: "routes/projects/create",
    parentId: "routes/projects",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports5
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "routes/projects",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: projects_exports2
  },
  "routes/sign-out": {
    id: "routes/sign-out",
    parentId: "root",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: sign_out_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/reports": {
    id: "routes/reports",
    parentId: "root",
    path: "reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/reports/index": {
    id: "routes/reports/index",
    parentId: "routes/reports",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: reports_exports2
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/topics": {
    id: "routes/topics",
    parentId: "root",
    path: "topics",
    index: void 0,
    caseSensitive: void 0,
    module: topics_exports
  },
  "routes/topics/delete.$id": {
    id: "routes/topics/delete.$id",
    parentId: "routes/topics",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports6
  },
  "routes/topics/update.$id": {
    id: "routes/topics/update.$id",
    parentId: "routes/topics",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports6
  },
  "routes/topics/create": {
    id: "routes/topics/create",
    parentId: "routes/topics",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports6
  },
  "routes/topics/index": {
    id: "routes/topics/index",
    parentId: "routes/topics",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: topics_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/roles": {
    id: "routes/roles",
    parentId: "root",
    path: "roles",
    index: void 0,
    caseSensitive: void 0,
    module: roles_exports
  },
  "routes/roles/delete.$id": {
    id: "routes/roles/delete.$id",
    parentId: "routes/roles",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports7
  },
  "routes/roles/update.$id": {
    id: "routes/roles/update.$id",
    parentId: "routes/roles",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports7
  },
  "routes/roles/create": {
    id: "routes/roles/create",
    parentId: "routes/roles",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports7
  },
  "routes/roles/index": {
    id: "routes/roles/index",
    parentId: "routes/roles",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: roles_exports2
  },
  "routes/tasks": {
    id: "routes/tasks",
    parentId: "root",
    path: "tasks",
    index: void 0,
    caseSensitive: void 0,
    module: tasks_exports
  },
  "routes/tasks/delete.$id": {
    id: "routes/tasks/delete.$id",
    parentId: "routes/tasks",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports8
  },
  "routes/tasks/update.$id": {
    id: "routes/tasks/update.$id",
    parentId: "routes/tasks",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports8
  },
  "routes/tasks/create": {
    id: "routes/tasks/create",
    parentId: "routes/tasks",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports8
  },
  "routes/tasks/index": {
    id: "routes/tasks/index",
    parentId: "routes/tasks",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: tasks_exports2
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/users/delete.$id": {
    id: "routes/users/delete.$id",
    parentId: "routes/users",
    path: "delete/:id",
    index: void 0,
    caseSensitive: void 0,
    module: delete_id_exports9
  },
  "routes/users/update.$id": {
    id: "routes/users/update.$id",
    parentId: "routes/users",
    path: "update/:id",
    index: void 0,
    caseSensitive: void 0,
    module: update_id_exports9
  },
  "routes/users/create": {
    id: "routes/users/create",
    parentId: "routes/users",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports9
  },
  "routes/users/index": {
    id: "routes/users/index",
    parentId: "routes/users",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: users_exports2
  },
  "routes/logs": {
    id: "routes/logs",
    parentId: "root",
    path: "logs",
    index: void 0,
    caseSensitive: void 0,
    module: logs_exports
  },
  "routes/logs/index": {
    id: "routes/logs/index",
    parentId: "routes/logs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: logs_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
