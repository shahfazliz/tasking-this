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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
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
var main_default = "/build/_assets/main-SIGZXRHL.css";

// app/styles/side-menu.css
var side_menu_default = "/build/_assets/side-menu-OLWLIALM.css";

// app/ui-components/BasicNavLink.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), BasicNavLink = ({ prefetch = "none", role = "", to, children, dataTooltip }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  import_react2.NavLink,
  {
    prefetch,
    to,
    role,
    "data-tooltip": dataTooltip,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/ui-components/BasicNavLink.tsx",
    lineNumber: 22,
    columnNumber: 11
  },
  this
), CreateNavLink = ({ to, role, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BasicNavLink, { to, role, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { style: { position: "relative", top: "2px" }, className: "lni lni-plus", title: "create" }, void 0, !1, {
    fileName: "app/ui-components/BasicNavLink.tsx",
    lineNumber: 33,
    columnNumber: 44
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
    " ",
    text
  ] }, void 0, !0, {
    fileName: "app/ui-components/BasicNavLink.tsx",
    lineNumber: 33,
    columnNumber: 134
  }, this)
] }, void 0, !0, {
  fileName: "app/ui-components/BasicNavLink.tsx",
  lineNumber: 33,
  columnNumber: 10
}, this), UpdateNavLink = ({ to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BasicNavLink, { to, dataTooltip: "update", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "lni lni-pencil" }, void 0, !1, {
  fileName: "app/ui-components/BasicNavLink.tsx",
  lineNumber: 37,
  columnNumber: 53
}, this) }, void 0, !1, {
  fileName: "app/ui-components/BasicNavLink.tsx",
  lineNumber: 37,
  columnNumber: 10
}, this), DeleteNavLink = ({ to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BasicNavLink, { to, dataTooltip: "delete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "lni lni-trash-can" }, void 0, !1, {
  fileName: "app/ui-components/BasicNavLink.tsx",
  lineNumber: 41,
  columnNumber: 53
}, this) }, void 0, !1, {
  fileName: "app/ui-components/BasicNavLink.tsx",
  lineNumber: 41,
  columnNumber: 10
}, this);

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
  let connection, result;
  if (!query.includes("SELECT "))
    try {
      connection = await db.getConnection(), result = await connection.execute(query, values);
    } catch (error) {
      throw error;
    } finally {
      if (connection)
        return connection.release(), result;
    }
  let key = JSON.stringify({ query, values }), cache2 = getCache(), cachedResult = cache2.get(key);
  if (cachedResult)
    return cachedResult;
  try {
    connection = await db.getConnection(), result = await connection.execute(query, values);
  } catch (error) {
    throw error;
  } finally {
    if (connection)
      return connection.release(), cache2.set(key, result), result;
  }
}
var db_default = {
  execute
};

// app/model/Organization.tsx
var TABLE_NAME = "Organizations", TABLE_ATTRIBUTES = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Organization(obj) {
  return this.set(obj);
}
function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => {
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
function set(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create2() {
  try {
    await create(this);
  } catch (error) {
    console.error("createOrganization error:", error);
  }
  return this;
}
async function search2(criteriaObj) {
  try {
    return await search(criteriaObj);
  } catch (error) {
    return console.error("searchOrganization error:", error), [];
  }
}
async function update2() {
  try {
    await update(this);
  } catch (error) {
    console.error("updateOrganization error:", error);
  }
  return this;
}
async function erase2(criteriaObj) {
  try {
    await erase(criteriaObj);
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
    getAttributeValues,
    set,
    create: create2,
    update: update2
  }
);

// app/resource/Organizations.tsx
var getObjectKeyValues = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => `${obj[key]}`);
  return {
    keys,
    values
  };
};
async function create(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME} (${TABLE_ATTRIBUTES.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `, [result, response] = await db_default.execute(query, obj.getAttributeValues()), queryUserOrg = `
    INSERT INTO UserOrganization (userId, organizationId, createdByUserId)
    VALUES (?,?,?)
  `;
  await db_default.execute(queryUserOrg, [obj.createdBy.id, result.insertId, obj.createdBy.id]);
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
async function addUser(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO UserOrganization (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseUser(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), query = `
    DELETE FROM UserOrganization
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `, [rows, response] = await db_default.execute(query, values);
  return await hydrate(rows);
}
async function searchUserOrganization(criteriaObj) {
  let { keys, values } = getObjectKeyValues(criteriaObj), query = `
      SELECT userId FROM UserOrganization
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search3({ id: row.userId }))[0]));
}
async function hydrate(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId }), users = await searchUserOrganization({ organizationId: id });
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

// app/resource/Roles.tsx
async function create3(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES2.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME2} (${TABLE_ATTRIBUTES2.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll() {
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
async function search4(criteriaObj) {
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
    organizationId,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let organizations = await search({ id: organizationId }), createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId });
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
var TABLE_NAME2 = "Roles", TABLE_ATTRIBUTES2 = [
  "name",
  "description",
  "organizationId",
  "createdByUserId",
  "updatedByUserId"
];
function Role(obj) {
  return this.set(obj);
}
function getAttributeValues2() {
  return TABLE_ATTRIBUTES2.map((attribute) => {
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
function set2(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create4() {
  return await create3(this), this;
}
async function search5(criteriaObj) {
  return await search4(criteriaObj);
}
async function update4() {
  return await update3(this), this;
}
async function erase4(criteriaObj) {
  await erase3(criteriaObj);
}
Object.assign(
  Role.prototype,
  {
    getAttributeValues: getAttributeValues2,
    set: set2,
    create: create4,
    update: update4
  }
);

// app/resource/Projects.tsx
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
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll2() {
  let query = `SELECT * FROM ${TABLE_NAME3}`, [rows] = await db_default.execute(query);
  return await hydrate3(rows);
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
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME3}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function addUser3(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO UserProject (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseUser3(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), query = `
    DELETE FROM UserProject
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search6(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME3}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate3(rows);
}
async function searchUserProject(criteriaObj) {
  let { keys, values } = getObjectKeyValues2(criteriaObj), query = `
      SELECT userId FROM UserProject
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search3({ id: row.userId }))[0]));
}
async function hydrate3(rows) {
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
    let organization = await search2({ id: organizationId }), createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId }), users = await searchUserProject({ projectId: id });
    return new Project({
      id,
      name,
      description,
      organization: organization[0],
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      users
    });
  }));
}

// app/model/Project.tsx
var TABLE_NAME3 = "Projects", TABLE_ATTRIBUTES3 = [
  "name",
  "description",
  "organizationId",
  "createdByUserId",
  "updatedByUserId"
];
function Project(obj) {
  return this.set(obj);
}
function getAttributeValues3() {
  return TABLE_ATTRIBUTES3.map((attribute) => {
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
function set3(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create6() {
  return await create5(this), this;
}
async function search7(criteriaObj) {
  return (await search6(criteriaObj)).map((row) => new Project(row));
}
async function update6() {
  return await update5(this), this;
}
async function erase6(criteriaObj) {
  await erase5(criteriaObj);
}
Object.assign(
  Project.prototype,
  {
    getAttributeValues: getAttributeValues3,
    set: set3,
    create: create6,
    update: update6
  }
);

// app/resource/Users.tsx
var getObjectKeyValues3 = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => obj[key]);
  return {
    keys,
    values
  };
};
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
  let { keys, values } = getObjectKeyValues3(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME4}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, values);
}
async function search8(criteriaObj) {
  let { keys, values } = getObjectKeyValues3(criteriaObj), attributePlaceholder = keys.map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME4}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, values);
  return await hydrate4(rows);
}
async function searchRoles(criteriaObj) {
  let { keys, values } = getObjectKeyValues3(criteriaObj), query = `
      SELECT roleId FROM UserRole
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search5({ id: row.roleId }))[0]));
}
async function searchOrganization(criteriaObj) {
  let { keys, values } = getObjectKeyValues3(criteriaObj), query = `
      SELECT organizationId FROM UserOrganization
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
      UNION
      SELECT id AS organizationId FROM Organizations
      WHERE createdByUserId=${criteriaObj.userId}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search2({ id: row.organizationId }))[0]));
}
async function searchProject(criteriaObj) {
  let { keys, values } = getObjectKeyValues3(criteriaObj), query = `
    SELECT projectId FROM UserProject
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    UNION
    SELECT id AS projectId FROM Projects
    WHERE createdByUserId=${criteriaObj.userId}
  `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search7({ id: row.projectId }))[0]));
}
async function hydrate4(rows) {
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
var TABLE_NAME4 = "Users", TABLE_ATTRIBUTES4 = [
  "name",
  "email",
  "hashPassword"
];
function User(obj) {
  return this.set(obj);
}
function getAttributeValues4() {
  return TABLE_ATTRIBUTES4.map((attribute) => this[attribute]);
}
function set4(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create8() {
  try {
    await create7(this);
  } catch (error) {
    console.error("createUser error:", error);
  }
  return this;
}
async function search3(criteriaObj) {
  try {
    return await search8(criteriaObj);
  } catch (error) {
    return console.error("searchUser error:", error), [];
  }
}
async function update8() {
  try {
    await update7(this);
  } catch (error) {
    console.error("updateUser error:", error);
  }
  return this;
}
function roles() {
  return new Promise(async (resolve, reject) => {
    try {
      let roles2 = await searchRoles({ userId: this.id });
      resolve(roles2);
    } catch (error) {
      reject(error);
    }
  });
}
async function erase8(criteriaObj) {
  try {
    await erase7(criteriaObj);
  } catch (error) {
    console.error("eraseUser error:", error);
  }
}
async function searchOrganization2(criteriaObj) {
  try {
    return await searchOrganization(criteriaObj);
  } catch (error) {
    return console.error("searchUserOrganization error:", error), [];
  }
}
async function searchProject2(criteriaObj) {
  try {
    return await searchProject(criteriaObj);
  } catch (error) {
    return console.error("searchUserProject error:", error), [];
  }
}
Object.assign(
  User.prototype,
  {
    getAttributeValues: getAttributeValues4,
    set: set4,
    create: create8,
    update: update8,
    roles
  }
);

// app/session.tsx
var sessionCookie = (0, import_node2.createCookie)("__session", {
  secrets: ["r3m1xr0ck5"],
  sameSite: !0
}), { getSession, commitSession, destroySession } = (0, import_node2.createFileSessionStorage)({
  // The root directory where you want to store the files.
  // Make sure it's writable!
  dir: "user-sessions",
  cookie: sessionCookie
}), getUserSession = async (request) => {
  let session = await getSession(request.headers.get("Cookie")), userId = session.get("id"), users = userId ? await search3({ id: userId }) : [];
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
var import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function App() {
  let { user, isAdmin } = (0, import_react3.useLoaderData)(), [menuIsOpen, setMenuIsOpen] = (0, import_react4.useState)(!1), handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }, handleToggleBackgroundMenu = () => {
    setMenuIsOpen(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", "data-theme": "light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "container-fluid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Team Task Manager" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
          !user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/sign-in", children: "sign in" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 45,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/create-an-account", children: "sign up" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 44,
            columnNumber: 23
          }, this),
          user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/account", children: user.name }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 26
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { onClick: handleToggleBackgroundMenu, className: menuIsOpen ? "background-menu-open" : "background-menu-close" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { className: menuIsOpen ? "menu-open" : "menu-close", children: user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "closed-on-mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
        isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/users", children: "users" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 57,
          columnNumber: 35
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 57,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/organizations", children: "organizations" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 58,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 58,
          columnNumber: 19
        }, this),
        isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/roles", children: "roles" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 59,
          columnNumber: 35
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 59,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/projects", children: "projects" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/topics", children: "topics" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this),
        isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/taskstatus", children: "task status" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 35
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/tasks", children: "tasks" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/resources", children: "resources" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BasicNavLink, { to: "/reports", children: "reports" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          id: "menu-toggle",
          "aria-label": "menu",
          onClick: handleToggleMenu,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "lni lni-menu" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { role: "document", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function ErrorBoundry({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Sorry" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      error.message,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
var loader = async ({ request }) => {
  let { user } = await getUserSession(request), isAdmin = (await (user == null ? void 0 : user.roles()) ?? []).some(({ name }) => name === "Admin");
  return { user, isAdmin };
};
function CatchBoundry() {
  let caught = (0, import_react3.useCatch)();
  return console.error(caught), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Sorry" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      caught.statusText,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 132,
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
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/resource/TaskStatus.tsx
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
    color,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt
  }) => {
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId });
    return new TaskStatus({
      id,
      name,
      color,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt
    });
  }));
}

// app/model/TaskStatus.tsx
var TABLE_NAME5 = "TaskStatus", TABLE_ATTRIBUTES5 = [
  "name",
  "color",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function TaskStatus(obj) {
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
  return (await search9(criteriaObj)).map((row) => new TaskStatus(row));
}
async function update10() {
  return await update9(this), this;
}
async function erase10(criteriaObj) {
  await erase9(criteriaObj);
}
Object.assign(
  TaskStatus.prototype,
  {
    getAttributeValues: getAttributeValues5,
    set: set5,
    create: create10,
    update: update10
  }
);

// app/routes/taskstatus/delete.$id.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function DeleteTaskStatus() {
  let isSubmitting = (0, import_react5.useTransition)().state === "submitting", data = (0, import_react5.useLoaderData)();
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
  let objs = await search10({ id: params.id });
  return (0, import_node3.json)(objs[0]);
}, action = async ({ request, params }) => (await erase10({ id: params.id }), (0, import_node3.redirect)("/taskstatus"));

// app/routes/taskstatus/update.$id.tsx
var update_id_exports = {};
__export(update_id_exports, {
  action: () => action2,
  default: () => UpdateTaskStatus,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/sanitizerForm.tsx
var import_isomorphic_dompurify = __toESM(require("isomorphic-dompurify"));
function sanitizeData({ formData }) {
  let rawData = Object.fromEntries(formData);
  return Object.keys(rawData).reduce((acc, key) => (acc[key] = import_isomorphic_dompurify.default.sanitize(rawData[key]).trim(), acc), {});
}

// app/ui-components/TaskStatusForm.tsx
var import_react6 = require("@remix-run/react");

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

// app/ui-components/LabelColor.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function LabelColor({
  name = "",
  required = !1,
  tabIndex = 0,
  defaultValue = "#FFFFFF"
}) {
  let id = `input-${name}`, displayName = name.split("-").join(" ");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: id, children: displayName }, void 0, !1, {
      fileName: "app/ui-components/LabelColor.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "input",
      {
        id,
        name,
        required,
        tabIndex,
        type: "color",
        defaultValue
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/LabelColor.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/LabelColor.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

// app/ui-components/TaskStatusForm.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function TaskStatusForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TaskStatusForm.tsx",
    lineNumber: 8,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = "",
  color = "#FFFFFF"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(FieldsetLegend, { title: "task status details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          lineNumber: 19,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        LabelColor,
        {
          name: "color",
          required: !0,
          tabIndex: 2,
          defaultValue: color
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskStatusForm.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        LabelTextarea,
        {
          defaultValue: description,
          name: "description",
          placeholder: "enter description of the task status",
          required: !1,
          tabIndex: 3
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskStatusForm.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/TaskStatusForm.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        tabIndex: 4,
        disabled: isSubmitting,
        "aria-busy": isSubmitting,
        children: getButtonName(!name && !description, isSubmitting)
      },
      void 0,
      !1,
      {
        fileName: "app/ui-components/TaskStatusForm.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/TaskStatusForm.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var getButtonName = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/taskstatus/update.$id.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function UpdateTaskStatus() {
  let isSubmitting = (0, import_react7.useTransition)().state === "submitting", data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: "Update Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TaskStatusForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search10({ id: params.id });
  return (0, import_node4.json)(objs[0]);
}, action2 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, color, description } = sanitizeData({ formData: await request.formData() });
  return (await search10({ id: params.id }))[0].set({
    name,
    color,
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
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/ui-components/UserForm.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function UserForm({
  name = "",
  email = "",
  isSubmitting = !1,
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/UserForm.tsx",
    lineNumber: 9,
    columnNumber: 14
  }, this)
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FieldsetLegend, { title: "user details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function CreateAnAccount() {
  let isSubmitting = (0, import_react9.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Create an account" }, void 0, !1, {
      fileName: "app/routes/create-an-account.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(UserForm, { isSubmitting }, void 0, !1, {
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
var import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function CreateTopic() {
  let isSubmitting = (0, import_react10.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Create Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TaskStatusForm, { isSubmitting }, void 0, !1, {
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
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AllTaskStatus() {
  let rows = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { children: "All Task Status" }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/taskstatus/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Rows, { data: rows }, void 0, !1, {
        fileName: "app/routes/taskstatus/index.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Task Status" }, void 0, !1, {
      fileName: "app/routes/taskstatus/index.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this);
}
var Rows = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  color,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("mark", { style: { backgroundColor: color }, children: name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 63,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 67,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 68,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/taskstatus/index.tsx",
    lineNumber: 68,
    columnNumber: 11
  }, this)
] }, id, !0, {
  fileName: "app/routes/taskstatus/index.tsx",
  lineNumber: 61,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "app/routes/taskstatus/index.tsx",
  lineNumber: 48,
  columnNumber: 11
}, this), loader4 = async ({ params }) => {
  let rows = await readAll4();
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
var import_react12 = require("@remix-run/react");

// app/styles/summary-control.css
var summary_control_default = "/build/_assets/summary-control-YD2LMVQ4.css";

// app/routes/organizations.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Organizations() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/organizations.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizations.tsx",
    lineNumber: 6,
    columnNumber: 10
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
var import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function DeleteOrganization() {
  let isSubmitting = (0, import_react13.useTransition)().state === "submitting", data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Delete organization?" }, void 0, !1, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: "name:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizations/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizations/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
  let objs = await search2({ id: params.id });
  return (0, import_node8.json)(objs[0]);
}, action5 = async ({ request, params }) => (await erase2({ id: params.id }), (0, import_node8.redirect)("/organizations"));

// app/routes/organizations/update.$id.tsx
var update_id_exports2 = {};
__export(update_id_exports2, {
  action: () => action6,
  default: () => DeleteOrganization2,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/ui-components/OrganizationForm.tsx
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function OrganizationForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/OrganizationForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react14.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FieldsetLegend, { title: "organization details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function DeleteOrganization2() {
  let isSubmitting = (0, import_react15.useTransition)().state === "submitting", data = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "Update organization?" }, void 0, !1, {
        fileName: "app/routes/organizations/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(OrganizationForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search2({ id: Number(params.id) });
  return (0, import_node9.json)(objs[0]);
}, action6 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search2({ id: Number(params.id) }))[0].set({
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
var import_node10 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function CreateOrganization() {
  let isSubmitting = (0, import_react16.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "Create an organization" }, void 0, !1, {
        fileName: "app/routes/organizations/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(OrganizationForm, { isSubmitting }, void 0, !1, {
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
var import_node11 = require("@remix-run/node"), import_react18 = require("@remix-run/react");

// app/ui-components/Chip.tsx
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), chipStyle = {
  display: "inline-block",
  padding: "0.1rem 1rem",
  borderRadius: "1rem",
  margin: "0.1rem",
  position: "relative",
  border: "1px solid",
  borderColor: "hsl(195, 85%, 41%)"
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
function Chip({ children, actionName, data, editable = !1 }) {
  let keys = Object.keys(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: chipStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children }, void 0, !1, {
      fileName: "app/ui-components/Chip.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Form, { style: formStyle, method: "post", children: [
      keys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", name: key, value: data[key] }, key, !1, {
        fileName: "app/ui-components/Chip.tsx",
        lineNumber: 44,
        columnNumber: 22
      }, this)),
      editable && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "button",
        {
          style: buttonStyle,
          type: "submit",
          name: "_action",
          value: actionName,
          "aria-label": actionName,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("i", { style: chipDeleteBtnStyle, className: "lni lni-cross-circle" }, void 0, !1, {
            fileName: "app/ui-components/Chip.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/Chip.tsx",
          lineNumber: 48,
          columnNumber: 14
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/Chip.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui-components/Chip.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/ui-components/LabelSelect.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function LabelSelect({
  name = "",
  required = !1,
  tabIndex = 0,
  defaultValue = "",
  options = []
}) {
  let id = `input-${name}`, displayName = name.split("-").join(" ");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: id, children: displayName }, void 0, !1, {
      fileName: "app/ui-components/LabelSelect.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "select",
      {
        id,
        name,
        required,
        tabIndex,
        defaultValue,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Options, { data: options }, void 0, !1, {
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
var Options = ({ data }) => data.map(({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), ACTION_ADD_USER = "add-user", ACTION_REMOVE_USER = "remove-user";
function AllOrganizations() {
  let { organizations, allUsers, isManager } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { children: "All Organizations" }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Rows2, { organizations, allUsers, isManager }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Organization" }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 35,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 29,
    columnNumber: 11
  }, this);
}
var UserChips = ({ users, organizationId, isManager }) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: users.length === 0 ? "there is no user in this organization" : users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_USER,
    data: { userId: user.id, organizationId },
    editable: isManager,
    children: user.name
  },
  user.id,
  !1,
  {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 46,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 40,
  columnNumber: 11
}, this), UserSelectOptions = ({ organizationId, allUsers }) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react18.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "organizationId", value: organizationId }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LabelSelect, { name: ACTION_ADD_USER, options: allUsers }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
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
      lineNumber: 65,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 62,
  columnNumber: 5
}, this), Rows2 = ({ organizations, allUsers, isManager }) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: organizations.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  users
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("summary", { className: "with-control-button", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: [
      index + 1,
      ". ",
      name
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 96,
      columnNumber: 15
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 97,
      columnNumber: 29
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 98,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 95,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: [
      "Description: ",
      description
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 101,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: [
      "Created by: ",
      createdBy.name,
      " on ",
      createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 102,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: [
      "Last updated by: ",
      updatedBy.name,
      " on ",
      updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: [
      "Users: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UserChips, { users, organizationId: id, isManager }, void 0, !1, {
        fileName: "app/routes/organizations/index.tsx",
        lineNumber: 104,
        columnNumber: 26
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizations/index.tsx",
      lineNumber: 104,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 100,
    columnNumber: 13
  }, this),
  isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UserSelectOptions, { allUsers, organizationId: id }, void 0, !1, {
    fileName: "app/routes/organizations/index.tsx",
    lineNumber: 106,
    columnNumber: 27
  }, this)
] }, id, !0, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 94,
  columnNumber: 11
}, this)) }, void 0, !1, {
  fileName: "app/routes/organizations/index.tsx",
  lineNumber: 78,
  columnNumber: 11
}, this), loader7 = async ({ request, params }) => {
  let { user } = await getUserSession(request), isManager = (await (user == null ? void 0 : user.roles()) ?? []).some(({ name }) => name === "Manager"), userOrganizations = await searchOrganization2({ userId: user.id }), allUsers = await readAll3();
  return (0, import_node11.json)({
    organizations: userOrganizations,
    allUsers,
    isManager
  });
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
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Permissions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
    fileName: "app/routes/permissions.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/permissions.tsx",
    lineNumber: 4,
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
var import_node12 = require("@remix-run/node"), import_react20 = require("@remix-run/react");

// app/resource/Permissions.tsx
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
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId });
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
var TABLE_NAME6 = "Permissions", TABLE_ATTRIBUTES6 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Permission(obj) {
  return this.set(obj);
}
function getAttributeValues6() {
  return TABLE_ATTRIBUTES6.map((attribute) => {
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
function set6(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create12() {
  return await create11(this), this;
}
async function search12(criteriaObj) {
  return (await search11(criteriaObj)).map((row) => new Permission(row));
}
async function update12() {
  return await update11(this), this;
}
async function erase12(criteriaObj) {
  await erase11(criteriaObj);
}
Object.assign(
  Permission.prototype,
  {
    getAttributeValues: getAttributeValues6,
    set: set6,
    create: create12,
    update: update12
  }
);

// app/routes/permissions/delete.$id.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function DeletePermission() {
  let isSubmitting = (0, import_react20.useTransition)().state === "submitting", data = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { children: "Delete Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/permissions/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/permissions/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react20.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
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
  let objs = await search12({ id: params.id });
  return (0, import_node12.json)(objs[0]);
}, action9 = async ({ request, params }) => (await erase12({ id: params.id }), (0, import_node12.redirect)("/permissions"));

// app/routes/permissions/update.$id.tsx
var update_id_exports3 = {};
__export(update_id_exports3, {
  action: () => action10,
  default: () => DeletePermission2,
  loader: () => loader9
});
var import_node13 = require("@remix-run/node"), import_react22 = require("@remix-run/react");

// app/ui-components/PermissionForm.tsx
var import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function PermissionForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/PermissionForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react21.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FieldsetLegend, { title: "permission details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
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
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function DeletePermission2() {
  let isSubmitting = (0, import_react22.useTransition)().state === "submitting", data = (0, import_react22.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { children: "Update Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(PermissionForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search12({ id: params.id });
  return (0, import_node13.json)(objs[0]);
}, action10 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search12({ id: params.id }))[0].set({
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
var import_node14 = require("@remix-run/node"), import_react23 = require("@remix-run/react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function CreatePermission() {
  let isSubmitting = (0, import_react23.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "Create a Permission" }, void 0, !1, {
        fileName: "app/routes/permissions/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(PermissionForm, { isSubmitting }, void 0, !1, {
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
var import_node15 = require("@remix-run/node"), import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function AllPermissions() {
  let rows = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h1", { children: "Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { children: "All Permissions" }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/permissions/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Rows3, { data: rows }, void 0, !1, {
        fileName: "app/routes/permissions/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/permissions/index.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Permission" }, void 0, !1, {
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
var Rows3 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 65,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/permissions/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
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
  let rows = await readAll5();
  return (0, import_node15.json)(rows);
}, meta5 = () => ({
  title: "Permissions - Team Task Manager",
  description: "Permissions page"
});

// app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => Resources,
  links: () => links3
});
var import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function Resources() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
    fileName: "app/routes/resources.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/resources.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
var links3 = () => [{
  rel: "stylesheet",
  href: summary_control_default
}];

// app/routes/resources/delete.$id.tsx
var delete_id_exports4 = {};
__export(delete_id_exports4, {
  action: () => action12,
  default: () => DeleteResource,
  loader: () => loader11
});
var import_node16 = require("@remix-run/node"), import_react26 = require("@remix-run/react");

// app/resource/Topics.tsx
var getObjectKeyValues4 = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => `${obj[key]}`);
  return {
    keys,
    values
  };
};
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
async function erase13(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME7}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function addProject(criteriaObj) {
  let { keys, values } = getObjectKeyValues4(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO ProjectTopic (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseProject(criteriaObj) {
  let { keys, values } = getObjectKeyValues4(criteriaObj), query = `
    DELETE FROM ProjectTopic
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search13(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME7}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate7(rows);
}
async function searchProjectTopic(criteriaObj) {
  let { keys, values } = getObjectKeyValues4(criteriaObj), query = `
      SELECT projectId FROM ProjectTopic
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search7({ id: row.projectId }))[0]));
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
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId }), projects = await searchProjectTopic({ topicId: id });
    return new Topic({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      projects
    });
  }));
}

// app/model/Topic.tsx
var TABLE_NAME7 = "Topics", TABLE_ATTRIBUTES7 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Topic(obj) {
  return this.set(obj);
}
function getAttributeValues7() {
  return TABLE_ATTRIBUTES7.map((attribute) => {
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
function set7(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create14() {
  return await create13(this), this;
}
async function search14(criteriaObj) {
  return (await search13(criteriaObj)).map((row) => new Topic(row));
}
async function update14() {
  return await update13(this), this;
}
async function erase14(criteriaObj) {
  await erase13(criteriaObj);
}
Object.assign(
  Topic.prototype,
  {
    getAttributeValues: getAttributeValues7,
    set: set7,
    create: create14,
    update: update14
  }
);

// app/resource/Resources.tsx
var getObjectKeyValues5 = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => `${obj[key]}`);
  return {
    keys,
    values
  };
};
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
async function erase15(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME8}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function addTopic(criteriaObj) {
  let { keys, values } = getObjectKeyValues5(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO ResourceTopic (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseTopic(criteriaObj) {
  let { keys, values } = getObjectKeyValues5(criteriaObj), query = `
    DELETE FROM ResourceTopic
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search15(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME8}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate8(rows);
}
async function searchResourceTopic(criteriaObj) {
  let { keys, values } = getObjectKeyValues5(criteriaObj), query = `
      SELECT topicId FROM ResourceTopic
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search14({ id: row.topicId }))[0]));
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
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId }), topics = await searchResourceTopic({ resourceId: id });
    return new Resource({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      topics
    });
  }));
}

// app/model/Resource.tsx
var TABLE_NAME8 = "Resources", TABLE_ATTRIBUTES8 = [
  "name",
  "description",
  "createdByUserId",
  "updatedByUserId"
];
function Resource(obj) {
  return this.set(obj);
}
function getAttributeValues8() {
  return TABLE_ATTRIBUTES8.map((attribute) => {
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
function set8(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create16() {
  return await create15(this), this;
}
async function search16(criteriaObj) {
  return (await search15(criteriaObj)).map((row) => new Resource(row));
}
async function update16() {
  return await update15(this), this;
}
async function erase16(criteriaObj) {
  await erase15(criteriaObj);
}
Object.assign(
  Resource.prototype,
  {
    getAttributeValues: getAttributeValues8,
    set: set8,
    create: create16,
    update: update16
  }
);

// app/routes/resources/delete.$id.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function DeleteResource() {
  let isSubmitting = (0, import_react26.useTransition)().state === "submitting", data = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { children: "Delete Resources" }, void 0, !1, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/resources/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react26.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
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
  let objs = await search16({ id: params.id });
  return (0, import_node16.json)(objs[0]);
}, action12 = async ({ request, params }) => (await erase16({ id: params.id }), (0, import_node16.redirect)("/resources"));

// app/routes/resources/update.$id.tsx
var update_id_exports4 = {};
__export(update_id_exports4, {
  action: () => action13,
  default: () => DeleteResource2,
  loader: () => loader12
});
var import_node17 = require("@remix-run/node"), import_react28 = require("@remix-run/react");

// app/ui-components/ResourceForm.tsx
var import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function ResourceForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/ResourceForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react27.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(FieldsetLegend, { title: "resource details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
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
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function DeleteResource2() {
  let isSubmitting = (0, import_react28.useTransition)().state === "submitting", data = (0, import_react28.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { children: "Update Resources" }, void 0, !1, {
        fileName: "app/routes/resources/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ResourceForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search16({ id: params.id });
  return (0, import_node17.json)(objs[0]);
}, action13 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search16({ id: params.id }))[0].set({
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
var import_node18 = require("@remix-run/node"), import_react29 = require("@remix-run/react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function CreateResource() {
  let isSubmitting = (0, import_react29.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { children: "Create a Resource" }, void 0, !1, {
        fileName: "app/routes/resources/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(ResourceForm, { isSubmitting }, void 0, !1, {
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
  action: () => action15,
  default: () => AllResources,
  loader: () => loader13,
  meta: () => meta6
});
var import_react30 = require("@remix-run/react"), import_node19 = require("@remix-run/node");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), ACTION_ADD_TOPIC = "add-topic", ACTION_REMOVE_TOPIC = "remove-topic";
function AllResources() {
  let { resource, allTopics } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h2", { children: "All resources and ideas worth note taking" }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Rows4, { resource, allTopics }, void 0, !1, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Resource" }, void 0, !1, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 36,
    columnNumber: 11
  }, this);
}
var TopicChips = ({ topics, resourceId }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: topics.length === 0 ? "there is no topic associated to this resource" : topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_TOPIC,
    data: { topicId: topic.id, resourceId },
    children: topic.name
  },
  topic.id,
  !1,
  {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 53,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), TopicSelectOptions = ({ resourceId, allTopics }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react30.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "hidden", name: "resourceId", value: resourceId }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(LabelSelect, { name: ACTION_ADD_TOPIC, options: allTopics }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "button",
    {
      type: "submit",
      name: "_action",
      value: ACTION_ADD_TOPIC,
      "aria-label": ACTION_ADD_TOPIC,
      children: "add"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 68,
  columnNumber: 5
}, this), Rows4 = ({ resource, allTopics }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: resource.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  topics
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("summary", { className: "with-control-button", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { children: [
      index + 1,
      ". ",
      name
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 102,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 104,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 101,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: [
      "Description: ",
      description
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 107,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: [
      "Created by: ",
      createdBy.name,
      " on ",
      createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 108,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: [
      "Last updated by: ",
      updatedBy.name,
      " on ",
      updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 109,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: [
      "Projects: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(TopicChips, { topics, resourceId: id }, void 0, !1, {
        fileName: "app/routes/resources/index.tsx",
        lineNumber: 110,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/index.tsx",
      lineNumber: 110,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 106,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(TopicSelectOptions, { allTopics, resourceId: id }, void 0, !1, {
    fileName: "app/routes/resources/index.tsx",
    lineNumber: 112,
    columnNumber: 13
  }, this)
] }, id, !0, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 100,
  columnNumber: 11
}, this)) }, void 0, !1, {
  fileName: "app/routes/resources/index.tsx",
  lineNumber: 84,
  columnNumber: 11
}, this), loader13 = async ({ params }) => {
  let resource = await readAll7(), allTopics = await readAll6();
  return (0, import_node19.json)({
    resource,
    allTopics
  });
}, action15 = async ({ request }) => {
  let { user } = await getUserSession(request), { _action, resourceId, ...values } = sanitizeData({ formData: await request.formData() });
  switch (_action) {
    case ACTION_ADD_TOPIC:
      await addTopic({
        createdByUserId: user.id,
        resourceId,
        topicId: values[ACTION_ADD_TOPIC]
      });
      break;
    case ACTION_REMOVE_TOPIC:
      await eraseTopic({ topicId: values.topicId, resourceId });
      break;
    default:
      break;
  }
  return null;
}, meta6 = () => ({
  title: "Resources - Team Task Manager",
  description: "Resources page"
});

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  links: () => links4
});
var import_react31 = require("@remix-run/react");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react31.Outlet, {}, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
var links4 = () => [{
  rel: "stylesheet",
  href: summary_control_default
}];

// app/routes/projects/delete.$id.tsx
var delete_id_exports5 = {};
__export(delete_id_exports5, {
  action: () => action16,
  default: () => DeleteProject,
  loader: () => loader14
});
var import_node20 = require("@remix-run/node"), import_react32 = require("@remix-run/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function DeleteProject() {
  let isSubmitting = (0, import_react32.useTransition)().state === "submitting", data = (0, import_react32.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { children: "Delete Project" }, void 0, !1, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react32.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
  let objs = await search7({ id: params.id });
  return (0, import_node20.json)(objs[0]);
}, action16 = async ({ request, params }) => (await erase6({ id: params.id }), (0, import_node20.redirect)("/projects"));

// app/routes/projects/update.$id.tsx
var update_id_exports5 = {};
__export(update_id_exports5, {
  action: () => action17,
  default: () => UpdateProject,
  loader: () => loader15
});
var import_node21 = require("@remix-run/node"), import_react34 = require("@remix-run/react");

// app/ui-components/ProjectForm.tsx
var import_react33 = require("@remix-run/react");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function ProjectForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, {}, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react33.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(FieldsetLegend, { title: "project details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
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
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function UpdateProject() {
  let isSubmitting = (0, import_react34.useTransition)().state === "submitting", { project, organizations } = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { children: "Update Project" }, void 0, !1, {
        fileName: "app/routes/projects/update.$id.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/update.$id.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ProjectForm, { ...project, organizationOptions: organizations, isSubmitting }, void 0, !1, {
      fileName: "app/routes/projects/update.$id.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/update.$id.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this);
}
var loader15 = async ({ request, params }) => {
  let objs = await search7({ id: params.id }), { user } = await getUserSession(request), organizations = await search2({ createdByUserId: user.id });
  return (0, import_node21.json)({
    project: objs[0],
    organizations
  });
}, action17 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description, organization } = sanitizeData({ formData: await request.formData() }), organizations = await search2({ id: organization });
  return (await search7({ id: params.id }))[0].set({
    name,
    description,
    organization: organizations[0],
    updatedBy: user
  }).update(), (0, import_node21.redirect)("/projects");
};

// app/routes/projects/create.tsx
var create_exports5 = {};
__export(create_exports5, {
  action: () => action18,
  default: () => CreateProject,
  loader: () => loader16
});
var import_node22 = require("@remix-run/node"), import_react35 = require("@remix-run/react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function CreateProject() {
  let organizations = (0, import_react35.useLoaderData)(), isSubmitting = (0, import_react35.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/create.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { children: "Create a Project" }, void 0, !1, {
        fileName: "app/routes/projects/create.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/create.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
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
  let { user } = await getUserSession(request), organizations = await search2({ createdByUserId: user.id });
  return (0, import_node22.json)(organizations);
}, action18 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description, organization } = sanitizeData({ formData: await request.formData() }), organizations = await search2({
    id: organization
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
  action: () => action19,
  default: () => AllProjects,
  loader: () => loader17,
  meta: () => meta7
});
var import_react36 = require("@remix-run/react"), import_node23 = require("@remix-run/node");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), ACTION_ADD_USER2 = "add-user", ACTION_REMOVE_USER2 = "remove-user";
function AllProjects() {
  let { projects, allUsers, isManager } = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { children: "All Projects" }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Rows5, { projects, allUsers, isManager }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Project" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 44,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 38,
    columnNumber: 11
  }, this);
}
var UserChips2 = ({ users, projectId, isManager }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: users.length === 0 ? "there is no user in this project" : users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_USER2,
    data: { userId: user.id, projectId },
    editable: isManager,
    children: user.name
  },
  user.id,
  !1,
  {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 55,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 49,
  columnNumber: 11
}, this), Rows5 = ({ projects, allUsers, isManager }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: projects.map(({
  id,
  name,
  description,
  organization,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  users
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("summary", { className: "with-control-button", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { children: [
      index + 1,
      ". ",
      name
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 89,
      columnNumber: 15
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 90,
      columnNumber: 29
    }, this),
    isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 91,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 88,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { children: [
      "Description: ",
      description
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 94,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { children: [
      "Organization: ",
      organization.name
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 95,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { children: [
      "Created by: ",
      createdBy.name,
      " on ",
      createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 96,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { children: [
      "Last updated by: ",
      updatedBy.name,
      " on ",
      updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 97,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("li", { children: [
      "Users: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(UserChips2, { users, projectId: id, isManager }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 98,
        columnNumber: 26
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 93,
    columnNumber: 13
  }, this),
  isManager && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(UserSelectOptions2, { allUsers, projectId: id }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 100,
    columnNumber: 27
  }, this)
] }, id, !0, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 87,
  columnNumber: 11
}, this)) }, void 0, !1, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 70,
  columnNumber: 11
}, this), UserSelectOptions2 = ({ projectId, allUsers }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react36.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("input", { type: "hidden", name: "projectId", value: projectId }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(LabelSelect, { name: ACTION_ADD_USER2, options: allUsers }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    "button",
    {
      type: "submit",
      name: "_action",
      value: ACTION_ADD_USER2,
      "aria-label": ACTION_ADD_USER2,
      children: "add"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 113,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/projects/index.tsx",
  lineNumber: 110,
  columnNumber: 5
}, this), loader17 = async ({ request }) => {
  let { user } = await getUserSession(request), isManager = (await (user == null ? void 0 : user.roles()) ?? []).some(({ name }) => name === "Manager"), userProjects = await searchProject2({ userId: user.id }), projects = await readAll2(), allUsers = await readAll3();
  return (0, import_node23.json)({
    allUsers,
    projects: userProjects,
    isManager
  });
}, action19 = async ({ request }) => {
  let { user } = await getUserSession(request), { _action, projectId, ...values } = sanitizeData({ formData: await request.formData() });
  switch (_action) {
    case ACTION_ADD_USER2:
      await addUser3({
        createdByUserId: user.id,
        projectId,
        userId: values[ACTION_ADD_USER2]
      });
      break;
    case ACTION_REMOVE_USER2:
      await eraseUser3({ userId: values.userId, projectId });
      break;
    default:
      break;
  }
  return null;
}, meta7 = () => ({
  title: "Projects - Team Task Manager",
  description: "Projects page"
});

// app/routes/sign-out.tsx
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action20,
  default: () => SignOut,
  meta: () => meta8
});
var import_node24 = require("@remix-run/node"), import_react37 = require("@remix-run/react");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function SignOut() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_jsx_dev_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h2", { children: "Sign Out" }, void 0, !1, {
      fileName: "app/routes/sign-out.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react37.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("button", { children: "sign out" }, void 0, !1, {
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
var action20 = async ({ request, params }) => {
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
var import_node25 = require("@remix-run/node"), import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function UserProfile() {
  let data = (0, import_react38.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h1", { children: "User Account" }, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h2", { children: "Profile" }, void 0, !1, {
        fileName: "app/routes/account.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("p", { children: [
      "name: ",
      data.name
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("p", { children: [
      "email: ",
      data.email
    ] }, void 0, !0, {
      fileName: "app/routes/account.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(BasicNavLink, { role: "button", to: "/sign-out", children: "sign out" }, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/account.tsx",
    lineNumber: 14,
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
var import_react39 = require("@remix-run/react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function Reports() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react39.Outlet, {}, void 0, !1, {
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
var import_react_google_charts = require("react-google-charts");
var import_node26 = require("@remix-run/node");

// app/resource/Reports.tsx
async function searchTasks({ userId }) {
  let query = `
    SELECT
      task.*,
      taskStatus.name as status,
      topic.name as topic,
      project.name as project,
      org.name as organization
    FROM Tasks AS task
    LEFT JOIN TaskStatus AS taskStatus ON task.taskStatusId=taskStatus.id
    LEFT JOIN TaskTopic AS taskTopic ON task.id=taskTopic.taskId
    LEFT JOIN Topics AS topic ON taskTopic.topicId=topic.id
    LEFT JOIN ProjectTopic AS projectTopic ON topic.id=projectTopic.topicId
    LEFT JOIN Projects AS project ON projectTopic.projectId=project.id
    LEFT JOIN Organizations AS org ON project.organizationId=org.id
    WHERE assignedToUserId=?
  `, values = [`${userId}`], [rows] = await db_default.execute(query, values);
  return rows;
}

// app/routes/reports/index.tsx
var import_react40 = require("@remix-run/react"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function AllReports() {
  let { tasks, taskStatuses } = (0, import_react40.useLoaderData)(), allTasksData = [["Status", "Count"]];
  taskStatuses.reduce((accumulator, taskStatus) => (accumulator.push([
    taskStatus.name,
    tasks.filter((task) => task.status === taskStatus.name).length
  ]), accumulator), allTasksData);
  let importantUrgentTasks = tasks.filter((task) => task.isUrgent && task.isImportant), importantUrgentData = [["Status", "Count"]];
  taskStatuses.reduce((accumulator, taskStatus) => (accumulator.push([
    taskStatus.name,
    importantUrgentTasks.filter((task) => task.status === taskStatus.name).length
  ]), accumulator), importantUrgentData);
  let importantNotUrgentTasks = tasks.filter((task) => !task.isUrgent && task.isImportant), importantNotUrgentData = [["Status", "Count"]];
  taskStatuses.reduce((accumulator, taskStatus) => (accumulator.push([
    taskStatus.name,
    importantNotUrgentTasks.filter((task) => task.status === taskStatus.name).length
  ]), accumulator), importantNotUrgentData);
  let urgentNotImportantTasks = tasks.filter((task) => task.isUrgent && !task.isImportant), urgentNotImportantTasksData = [["Status", "Count"]];
  taskStatuses.reduce((accumulator, taskStatus) => (accumulator.push([
    taskStatus.name,
    urgentNotImportantTasks.filter((task) => task.status === taskStatus.name).length
  ]), accumulator), urgentNotImportantTasksData);
  let notUrgentNotImportantTasks = tasks.filter((task) => !task.isUrgent && !task.isImportant), notUrgentNotImportantTasksData = [["Status", "Count"]];
  return taskStatuses.reduce((accumulator, taskStatus) => (accumulator.push([
    taskStatus.name,
    notUrgentNotImportantTasks.filter((task) => task.status === taskStatus.name).length
  ]), accumulator), notUrgentNotImportantTasksData), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h1", { children: "Report" }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { children: "Current status and progress report" }, void 0, !1, {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/reports/index.tsx",
      lineNumber: 87,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_google_charts.Chart,
      {
        chartType: "PieChart",
        data: allTasksData,
        options: {
          title: "All Tasks by Status"
        },
        width: "100%",
        height: "400px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 91,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_google_charts.Chart,
      {
        chartType: "PieChart",
        data: importantUrgentData,
        options: {
          title: "All Urgent and Important Tasks by Status"
        },
        width: "100%",
        height: "400px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 100,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_google_charts.Chart,
      {
        chartType: "PieChart",
        data: urgentNotImportantTasksData,
        options: {
          title: "All Important but Not Urgent Tasks by Status"
        },
        width: "100%",
        height: "400px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 109,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_google_charts.Chart,
      {
        chartType: "PieChart",
        data: urgentNotImportantTasksData,
        options: {
          title: "All Urgent but Not Important Tasks by Status"
        },
        width: "100%",
        height: "400px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 118,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_google_charts.Chart,
      {
        chartType: "PieChart",
        data: notUrgentNotImportantTasksData,
        options: {
          title: "All Not Urgent and Not Important Tasks by Status"
        },
        width: "100%",
        height: "400px"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reports/index.tsx",
        lineNumber: 127,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/reports/index.tsx",
    lineNumber: 86,
    columnNumber: 11
  }, this);
}
var loader19 = async ({ request }) => {
  let { user } = await getUserSession(request), tasks = await searchTasks({ userId: user.id }), taskStatuses = await readAll4();
  return (0, import_node26.json)({
    tasks,
    taskStatuses
  });
}, meta10 = () => ({
  title: "Reports - Team Task Manager",
  description: "Reports page"
});

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action21,
  default: () => SignIn,
  meta: () => meta11
});
var import_node27 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_bcryptjs2 = __toESM(require("bcryptjs"));
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function SignIn() {
  let isSubmitting = (0, import_react41.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_jsx_dev_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h2", { children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react41.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("legend", { children: "User details" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("label", { htmlFor: "input-email", children: "email" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("input", { type: "email", name: "email", id: "input-email", tabIndex: 1, placeholder: "email", required: !0 }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("label", { htmlFor: "input-password", children: "password" }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("input", { type: "password", name: "password", id: "input-password", tabIndex: 2, placeholder: "password", required: !0 }, void 0, !1, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("button", { tabIndex: 3, disabled: isSubmitting, children: isSubmitting ? "submitting..." : "continue" }, void 0, !1, {
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
var action21 = async ({ request, params }) => {
  let { session } = await getUserSession(request), { email, password } = sanitizeData({ formData: await request.formData() }), user = (await search3({ email }))[0];
  return await import_bcryptjs2.default.compare(password, user.hashPassword) ? (session.set("id", user.id), session.set("name", user.name), session.set("email", user.email), (0, import_node27.redirect)("/tasks", {
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
  default: () => Topics,
  links: () => links5
});
var import_react42 = require("@remix-run/react");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function Topics() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react42.Outlet, {}, void 0, !1, {
    fileName: "app/routes/topics.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/topics.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
var links5 = () => [{
  rel: "stylesheet",
  href: summary_control_default
}];

// app/routes/topics/delete.$id.tsx
var delete_id_exports6 = {};
__export(delete_id_exports6, {
  action: () => action22,
  default: () => DeleteTopic,
  loader: () => loader20
});
var import_node28 = require("@remix-run/node"), import_react43 = require("@remix-run/react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function DeleteTopic() {
  let isSubmitting = (0, import_react43.useTransition)().state === "submitting", data = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h2", { children: "Delete Topic" }, void 0, !1, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/topics/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/topics/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react43.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
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
  let objs = await search14({ id: params.id });
  return (0, import_node28.json)(objs[0]);
}, action22 = async ({ request, params }) => (await erase14({ id: params.id }), (0, import_node28.redirect)("/topics"));

// app/routes/topics/update.$id.tsx
var update_id_exports6 = {};
__export(update_id_exports6, {
  action: () => action23,
  default: () => UpdateTopic,
  loader: () => loader21
});
var import_node29 = require("@remix-run/node"), import_react45 = require("@remix-run/react");

// app/ui-components/TopicForm.tsx
var import_react44 = require("@remix-run/react");
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function TopicForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_jsx_dev_runtime48.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TopicForm.tsx",
    lineNumber: 7,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react44.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(FieldsetLegend, { title: "topic details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
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
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function UpdateTopic() {
  let isSubmitting = (0, import_react45.useTransition)().state === "submitting", data = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_jsx_dev_runtime49.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h2", { children: "Update Topic" }, void 0, !1, {
        fileName: "app/routes/topics/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(TopicForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search14({ id: params.id });
  return (0, import_node29.json)(objs[0]);
}, action23 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search14({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node29.redirect)("/topics");
};

// app/routes/topics/create.tsx
var create_exports6 = {};
__export(create_exports6, {
  action: () => action24,
  default: () => CreateTopic2
});
var import_node30 = require("@remix-run/node"), import_react46 = require("@remix-run/react");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function CreateTopic2() {
  let isSubmitting = (0, import_react46.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { children: "Create Topic" }, void 0, !1, {
        fileName: "app/routes/topics/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TopicForm, { isSubmitting }, void 0, !1, {
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
var action24 = async ({ request, params }) => {
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
  action: () => action25,
  default: () => AllTopics,
  loader: () => loader22,
  meta: () => meta12
});
var import_react47 = require("@remix-run/react"), import_node31 = require("@remix-run/node");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), ACTION_ADD_PROJECT = "add-project", ACTION_REMOVE_PROJECT = "remove-project";
function AllTopics() {
  let { topics, allProjects } = (0, import_react47.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h1", { children: "Topics" }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h2", { children: "All Topics" }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Rows6, { topics, allProjects }, void 0, !1, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Add New Topic" }, void 0, !1, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 36,
    columnNumber: 11
  }, this);
}
var ProjectChips = ({ projects, topicId }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: projects.length === 0 ? "there is no project associated to this topic" : projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_PROJECT,
    data: { projectId: project.id, topicId },
    editable: !0,
    children: project.name
  },
  project.id,
  !1,
  {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 53,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 47,
  columnNumber: 11
}, this), ProjectSelectOptions = ({ topicId, allProject }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react47.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("input", { type: "hidden", name: "topicId", value: topicId }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(LabelSelect, { name: ACTION_ADD_PROJECT, options: allProject }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    "button",
    {
      type: "submit",
      name: "_action",
      value: ACTION_ADD_PROJECT,
      "aria-label": ACTION_ADD_PROJECT,
      children: "add"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 72,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 69,
  columnNumber: 5
}, this), Rows6 = ({ topics, allProjects }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: topics.map(({
  id,
  name,
  description,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  projects
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("summary", { className: "with-control-button", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { children: [
      index + 1,
      ". ",
      name
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 104,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 105,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 102,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("li", { children: [
      "Description: ",
      description
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 108,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("li", { children: [
      "Created by: ",
      createdBy.name,
      " on ",
      createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 109,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("li", { children: [
      "Last updated by: ",
      updatedBy.name,
      " on ",
      updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 110,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("li", { children: [
      "Projects: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ProjectChips, { projects, topicId: id }, void 0, !1, {
        fileName: "app/routes/topics/index.tsx",
        lineNumber: 111,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/topics/index.tsx",
      lineNumber: 111,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 107,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(ProjectSelectOptions, { allProject: allProjects, topicId: id }, void 0, !1, {
    fileName: "app/routes/topics/index.tsx",
    lineNumber: 113,
    columnNumber: 13
  }, this)
] }, id, !0, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 101,
  columnNumber: 11
}, this)) }, void 0, !1, {
  fileName: "app/routes/topics/index.tsx",
  lineNumber: 85,
  columnNumber: 11
}, this), loader22 = async ({ params }) => {
  let topics = await readAll6(), allProjects = await readAll2();
  return (0, import_node31.json)({
    topics,
    allProjects
  });
}, action25 = async ({ request }) => {
  let { user } = await getUserSession(request), { _action, topicId, ...values } = sanitizeData({ formData: await request.formData() });
  switch (_action) {
    case ACTION_ADD_PROJECT:
      await addProject({
        createdByUserId: user.id,
        topicId,
        projectId: values[ACTION_ADD_PROJECT]
      });
      break;
    case ACTION_REMOVE_PROJECT:
      await eraseProject({ projectId: values.projectId, topicId });
      break;
    default:
      break;
  }
  return null;
}, meta12 = () => ({
  title: "Topics - Team Task Manager",
  description: "Topics page"
});

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("h1", { children: "Welcome to Team Task Manager" }, void 0, !1, {
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
var import_react48 = require("@remix-run/react"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function Roles() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_jsx_dev_runtime53.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react48.Outlet, {}, void 0, !1, {
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
  action: () => action26,
  default: () => DeleteRole,
  loader: () => loader23
});
var import_node32 = require("@remix-run/node"), import_react49 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function DeleteRole() {
  let isSubmitting = (0, import_react49.useTransition)().state === "submitting", data = (0, import_react49.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_jsx_dev_runtime54.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("h2", { children: "Delete Role" }, void 0, !1, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("b", { children: "organization:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("td", { children: data.organization.name }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/roles/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("td", { children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 34,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/roles/delete.$id.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("td", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react49.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
  let objs = await search5({ id: params.id });
  return (0, import_node32.json)(objs[0]);
}, action26 = async ({ request, params }) => (await erase4({ id: params.id }), (0, import_node32.redirect)("/roles"));

// app/routes/roles/update.$id.tsx
var update_id_exports7 = {};
__export(update_id_exports7, {
  action: () => action27,
  default: () => DeleteRole2,
  loader: () => loader24
});
var import_node33 = require("@remix-run/node"), import_react51 = require("@remix-run/react");

// app/ui-components/RoleForm.tsx
var import_react50 = require("@remix-run/react");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function RoleForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_jsx_dev_runtime55.Fragment, {}, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react50.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(FieldsetLegend, { title: "role details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
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
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function DeleteRole2() {
  let isSubmitting = (0, import_react51.useTransition)().state === "submitting", data = (0, import_react51.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_jsx_dev_runtime56.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("h2", { children: "Update Role" }, void 0, !1, {
        fileName: "app/routes/roles/update.$id.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/update.$id.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
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
  let { user } = await getUserSession(request), roles2 = await search5({ id: params.id }), organizations = await search2({ createdByUserId: user.id });
  return (0, import_node33.json)({
    role: roles2[0],
    organizations
  });
}, action27 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search5({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node33.redirect)("/roles");
};

// app/routes/roles/create.tsx
var create_exports7 = {};
__export(create_exports7, {
  action: () => action28,
  default: () => CreateRole,
  loader: () => loader25
});
var import_node34 = require("@remix-run/node"), import_react52 = require("@remix-run/react");
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function CreateRole() {
  let organizations = (0, import_react52.useLoaderData)(), isSubmitting = (0, import_react52.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_jsx_dev_runtime57.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/create.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h2", { children: "Create a Role" }, void 0, !1, {
        fileName: "app/routes/roles/create.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/create.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
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
  let { user } = await getUserSession(request), organizations = await search2({ createdByUserId: user.id });
  return (0, import_node34.json)(organizations);
}, action28 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description, organization } = sanitizeData({ formData: await request.formData() }), organizations = await search2({
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
var import_node35 = require("@remix-run/node"), import_react53 = require("@remix-run/react");
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function AllRoles() {
  let rows = (0, import_react53.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("h1", { children: "Roles" }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("h2", { children: "All Roles" }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/index.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "organization" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/roles/index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Rows7, { data: rows }, void 0, !1, {
        fileName: "app/routes/roles/index.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/roles/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Role" }, void 0, !1, {
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
var Rows7 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  organization,
  createdBy,
  updatedBy
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 65,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: organization.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: createdBy.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 68,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: updatedBy.name }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 69,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 70,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/roles/index.tsx",
    lineNumber: 70,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
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
  let rows = await readAll();
  return (0, import_node35.json)(rows);
}, meta13 = () => ({
  title: "Roles - Team Task Manager",
  description: "Roles page"
});

// app/routes/tasks.tsx
var tasks_exports = {};
__export(tasks_exports, {
  default: () => Tasks,
  links: () => links6
});
var import_react54 = require("@remix-run/react");

// app/styles/task.css
var task_default = "/build/_assets/task-XGVY4ZCR.css";

// app/routes/tasks.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function Tasks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_jsx_dev_runtime59.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react54.Outlet, {}, void 0, !1, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/tasks.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
var links6 = () => [{
  rel: "stylesheet",
  href: summary_control_default
}, {
  rel: "stylesheet",
  href: task_default
}];

// app/routes/tasks/delete.$id.tsx
var delete_id_exports8 = {};
__export(delete_id_exports8, {
  action: () => action29,
  default: () => DeleteTask,
  loader: () => loader27
});
var import_node36 = require("@remix-run/node"), import_react55 = require("@remix-run/react");

// app/resource/Tasks.tsx
var getObjectKeyValues6 = (obj) => {
  let keys = Object.keys(obj), values = keys.map((key) => `${obj[key]}`);
  return {
    keys,
    values
  };
};
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
async function erase17(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    DELETE FROM ${TABLE_NAME9}
    WHERE ${attributePlaceholder}
  `;
  await db_default.execute(query, Object.values(criteriaObj));
}
async function addTopic2(criteriaObj) {
  let { keys, values } = getObjectKeyValues6(criteriaObj), attributePlaceHolder = keys.map(() => "?").join(","), query = `
    INSERT INTO TaskTopic (${keys.join(",")})
    VALUES (${attributePlaceHolder})
  `;
  await db_default.execute(query, values);
}
async function eraseTopic2(criteriaObj) {
  let { keys, values } = getObjectKeyValues6(criteriaObj), query = `
    DELETE FROM TaskTopic
    WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
  `;
  await db_default.execute(query, values);
}
async function search17(criteriaObj) {
  let attributePlaceholder = Object.keys(criteriaObj).map((column) => `${column}=?`).join(" AND "), query = `
    SELECT * FROM ${TABLE_NAME9}
    WHERE ${attributePlaceholder}
  `, [rows] = await db_default.execute(query, Object.values(criteriaObj));
  return await hydrate9(rows);
}
async function searchResourceTopic2(criteriaObj) {
  let { keys, values } = getObjectKeyValues6(criteriaObj), query = `
      SELECT topicId FROM TaskTopic
      WHERE ${keys.map((column) => `${column}=?`).join(" AND ")}
    `, [rows, response] = await db_default.execute(query, values);
  return rows.length === 0 ? [] : Promise.all(rows.map(async (row) => (await search14({ id: row.topicId }))[0]));
}
async function hydrate9(rows) {
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
    let createdByUsers = await search3({ id: createdByUserId }), updatedByUsers = await search3({ id: updatedByUserId }), assignedToUsers = await search3({ id: assignedToUserId }), taskStatuses = await search10({ id: taskStatusId }), topics = await searchResourceTopic2({ taskId: id });
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
      updatedAt,
      topics
    });
  }));
}

// app/model/Task.tsx
var TABLE_NAME9 = "Tasks", TABLE_ATTRIBUTES9 = [
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
function getAttributeValues9() {
  return TABLE_ATTRIBUTES9.map((attribute) => {
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
function set9(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create18() {
  try {
    await create17(this);
  } catch (error) {
    console.error("createTask error", error);
  }
  return this;
}
async function search18(criteriaObj) {
  return (await search17(criteriaObj)).map((row) => new Task(row));
}
async function update18() {
  return await update17(this), this;
}
async function erase18(criteriaObj) {
  await erase17(criteriaObj);
}
Object.assign(
  Task.prototype,
  {
    getAttributeValues: getAttributeValues9,
    set: set9,
    create: create18,
    update: update18
  }
);

// app/routes/tasks/delete.$id.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime");
function DeleteTask() {
  let isSubmitting = (0, import_react55.useTransition)().state === "submitting", data = (0, import_react55.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_jsx_dev_runtime60.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("h2", { children: "Delete Task" }, void 0, !1, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("b", { children: "description:" }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("td", { children: data.description }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("b", { children: "created by:" }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("td", { children: [
          data.createdBy.name,
          " at ",
          data.createdAt
        ] }, void 0, !0, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("b", { children: "last updated by:" }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("td", { children: [
          data.updatedBy.name,
          " at ",
          data.updatedAt
        ] }, void 0, !0, {
          fileName: "app/routes/tasks/delete.$id.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/delete.$id.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_react55.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
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
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tasks/delete.$id.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/delete.$id.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this);
}
var loader27 = async ({ request, params }) => {
  let objs = await search18({ id: params.id });
  return (0, import_node36.json)(objs[0]);
}, action29 = async ({ request, params }) => (await erase18({ id: params.id }), (0, import_node36.redirect)("/tasks"));

// app/routes/tasks/update.$id.tsx
var update_id_exports8 = {};
__export(update_id_exports8, {
  action: () => action30,
  default: () => UpdateTask,
  loader: () => loader28
});
var import_node37 = require("@remix-run/node");
var import_react57 = require("@remix-run/react");

// app/ui-components/TaskForm.tsx
var import_react56 = require("@remix-run/react");
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime"), levelUrgent = [{
  id: 0,
  name: "Not Urgent"
}, {
  id: 1,
  name: "Urgent"
}], levelImportant = [{
  id: 0,
  name: "Not Important"
}, {
  id: 1,
  name: "Important"
}];
function TaskForm({
  children = /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_jsx_dev_runtime61.Fragment, {}, void 0, !1, {
    fileName: "app/ui-components/TaskForm.tsx",
    lineNumber: 24,
    columnNumber: 14
  }, this),
  description = "",
  isSubmitting = !1,
  name = "",
  users = [],
  taskStatus = {},
  taskStatuses = [],
  timeEstimate = 0,
  assignedTo = {},
  isImportant = 0,
  isUrgent = 0
}) {
  let isToCreate = !name && !description;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_react56.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(FieldsetLegend, { title: "task details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
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
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
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
          lineNumber: 49,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
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
          lineNumber: 56,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
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
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
        LabelSelect,
        {
          defaultValue: taskStatus.id,
          name: "status",
          options: taskStatuses,
          tabIndex: 5
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
        LabelSelect,
        {
          defaultValue: isImportant.toString(),
          name: "importance",
          options: levelImportant,
          tabIndex: 6
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 76,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
        LabelSelect,
        {
          defaultValue: isUrgent.toString(),
          name: "urgency",
          options: levelUrgent,
          tabIndex: 7
        },
        void 0,
        !1,
        {
          fileName: "app/ui-components/TaskForm.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui-components/TaskForm.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
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
        lineNumber: 89,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui-components/TaskForm.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var getButtonName9 = (isToCreate, isSubmitting) => isToCreate ? isSubmitting ? "submitting ..." : "create" : isSubmitting ? "updating ..." : "update";

// app/routes/tasks/update.$id.tsx
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime");
function UpdateTask() {
  let { users, taskStatuses, task } = (0, import_react57.useLoaderData)(), isSubmitting = (0, import_react57.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_jsx_dev_runtime62.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/update.$id.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h2", { children: "Update Task" }, void 0, !1, {
        fileName: "app/routes/tasks/update.$id.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/update.$id.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(TaskForm, { ...task, users, taskStatuses, isSubmitting }, void 0, !1, {
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
  let objs = await search18({ id: params.id }), users = await readAll3(), taskStatuses = await readAll4();
  return (0, import_node37.json)({
    users,
    taskStatuses,
    task: objs[0]
  });
}, action30 = async ({ request, params }) => {
  let { user } = await getUserSession(request), {
    name,
    description,
    status,
    importance,
    urgency,
    ...values
  } = sanitizeData({ formData: await request.formData() }), searchedUsers = await search3({ id: values["assign-to"] }), taskStatuses = await search10({ id: status });
  return (await search18({ id: params.id }))[0].set({
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
  action: () => action31,
  default: () => CreateTask,
  loader: () => loader29
});
var import_node38 = require("@remix-run/node"), import_react58 = require("@remix-run/react");
var import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function CreateTask() {
  let { users, taskStatuses } = (0, import_react58.useLoaderData)(), isSubmitting = (0, import_react58.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_jsx_dev_runtime63.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("h2", { children: "Create a Task" }, void 0, !1, {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/create.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
      TaskForm,
      {
        isSubmitting,
        users,
        taskStatuses
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tasks/create.tsx",
        lineNumber: 24,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/create.tsx",
    lineNumber: 19,
    columnNumber: 11
  }, this);
}
var loader29 = async ({ request, params }) => {
  let users = await readAll3(), taskStatuses = await readAll4();
  return (0, import_node38.json)({
    users,
    taskStatuses
  });
}, action31 = async ({ request, params }) => {
  let { user } = await getUserSession(request), {
    name,
    description,
    status,
    importance,
    urgency,
    ...values
  } = sanitizeData({ formData: await request.formData() }), searchedUsers = await search3({ id: values["assign-to"] }), taskStatuses = await search10({ id: status });
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
  action: () => action32,
  default: () => AllTasks,
  loader: () => loader30,
  meta: () => meta14
});
var import_node39 = require("@remix-run/node");
var import_react59 = require("@remix-run/react");
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime"), ACTION_ADD_TOPIC2 = "add-topic", ACTION_REMOVE_TOPIC2 = "remove-topic";
function AllTasks() {
  let { tasks, allTopics } = (0, import_react59.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h1", { children: "Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h2", { children: "All Tasks" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Rows8, { tasks, allTopics }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create Task" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 42,
    columnNumber: 11
  }, this);
}
var TopicChips2 = ({ topics, taskId }) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: topics.length === 0 ? "there is no topic associated to this task" : topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
  Chip,
  {
    actionName: ACTION_REMOVE_TOPIC2,
    data: { topicId: topic.id, taskId },
    editable: !0,
    children: topic.name
  },
  topic.id,
  !1,
  {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 59,
    columnNumber: 13
  },
  this
)) }, void 0, !1, {
  fileName: "app/routes/tasks/index.tsx",
  lineNumber: 53,
  columnNumber: 11
}, this), TopicSelectOptions2 = ({ taskId, allTopics }) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react59.Form, { method: "post", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("input", { type: "hidden", name: "taskId", value: taskId }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(LabelSelect, { name: ACTION_ADD_TOPIC2, options: allTopics }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
    "button",
    {
      type: "submit",
      name: "_action",
      value: ACTION_ADD_TOPIC2,
      "aria-label": ACTION_ADD_TOPIC2,
      children: "add"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 78,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/tasks/index.tsx",
  lineNumber: 75,
  columnNumber: 5
}, this), Task2 = ({ task, allTopics, index }) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("details", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("summary", { className: "with-control-button", style: { backgroundColor: task.taskStatus.color }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "task-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: [
        index + 1,
        ". "
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: [
        task.name,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "summary-detail", children: [
        task.assignedTo.name,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "summary-detail", children: task.taskStatus.name }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(UpdateNavLink, { to: `./update/${task.id}` }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(DeleteNavLink, { to: `./delete/${task.id}` }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Description: ",
      task.description
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Assigned to: ",
      task.assignedTo.name
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Task status: ",
      task.taskStatus.name
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Important: ",
      task.isImportant ? "High" : "Low"
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Urgent: ",
      task.isUrgent ? "High" : "Low"
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Time estimate: ",
      task.timeEstimate,
      " hour",
      task.timeEstimate > 1 && "s"
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Created by: ",
      task.createdBy.name,
      " on ",
      task.createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Last updated by: ",
      task.updatedBy.name,
      " on ",
      task.updatedAt
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("li", { children: [
      "Related Topics: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TopicChips2, { topics: task.topics, taskId: task.id }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 112,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TopicSelectOptions2, { allTopics, taskId: task.id }, void 0, !1, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/tasks/index.tsx",
  lineNumber: 92,
  columnNumber: 5
}, this), Rows8 = ({ tasks, allTopics }) => {
  let urgentAndImportantTasks = tasks.filter((task) => task.isUrgent && task.isImportant), notUrgentAndImportantTasks = tasks.filter((task) => !task.isUrgent && task.isImportant), urgentAndNotImportantTasks = tasks.filter((task) => task.isUrgent && !task.isImportant), notUrgentAndNotImportantTasks = tasks.filter((task) => !task.isUrgent && !task.isImportant);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "task-matrix", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 126,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "text-center", children: "Urgent" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "text-center", children: "Not Urgent" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 128,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { style: { minHeight: "300px", paddingTop: "80px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "vertical-text", children: "Important" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 129,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", {
      className: "task-group",
      // Urgent and Important
      children: urgentAndImportantTasks.length > 0 ? urgentAndImportantTasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Task2, { task, allTopics, index }, task.id, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 136,
        columnNumber: 77
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "empty-task-container", children: "there is no task" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 132,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", {
      className: "task-group",
      // Not Urgent and Important
      children: notUrgentAndImportantTasks.length > 0 ? notUrgentAndImportantTasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Task2, { task, allTopics, index }, task.id, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 144,
        columnNumber: 80
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "empty-task-container", children: "there is no task" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 140,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { style: { minHeight: "300px", paddingTop: "80px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "vertical-text", children: "Not Important" }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 148,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", {
      className: "task-group",
      // Urgent and Not Important
      children: urgentAndNotImportantTasks.length > 0 ? urgentAndNotImportantTasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Task2, { task, allTopics, index }, task.id, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 155,
        columnNumber: 80
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "empty-task-container", children: "there is no task" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 151,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", {
      className: "task-group",
      // Not Urgent and Not Important
      children: notUrgentAndNotImportantTasks.length > 0 ? notUrgentAndNotImportantTasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Task2, { task, allTopics, index }, task.id, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 163,
        columnNumber: 83
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "empty-task-container", children: "there is no task" }, void 0, !1, {
        fileName: "app/routes/tasks/index.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/tasks/index.tsx",
      lineNumber: 159,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tasks/index.tsx",
    lineNumber: 125,
    columnNumber: 11
  }, this);
}, loader30 = async ({ params }) => {
  let tasks = await readAll8(), allTopics = await readAll6();
  return (0, import_node39.json)({
    tasks,
    allTopics
  });
}, action32 = async ({ request }) => {
  let { user } = await getUserSession(request), { _action, taskId, ...values } = sanitizeData({ formData: await request.formData() });
  switch (_action) {
    case ACTION_ADD_TOPIC2:
      await addTopic2({
        createdByUserId: user.id,
        taskId,
        topicId: values[ACTION_ADD_TOPIC2]
      });
      break;
    case ACTION_REMOVE_TOPIC2:
      await eraseTopic2({ topicId: values.topicId, taskId });
      break;
    default:
      break;
  }
  return null;
}, meta14 = () => ({
  title: "Tasks - Team Task Manager",
  description: "Tasks page"
});

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Users
});
var import_react60 = require("@remix-run/react"), import_jsx_dev_runtime65 = require("react/jsx-dev-runtime");
function Users() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_jsx_dev_runtime65.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_react60.Outlet, {}, void 0, !1, {
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
  action: () => action33,
  default: () => DeleteUser,
  loader: () => loader31
});
var import_node40 = require("@remix-run/node"), import_react61 = require("@remix-run/react");
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime");
function DeleteUser() {
  let isSubmitting = (0, import_react61.useTransition)().state === "submitting", data = (0, import_react61.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_jsx_dev_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("h2", { children: "Delete user" }, void 0, !1, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/delete.$id.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("table", { role: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("th", { scope: "row", children: "name:" }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("td", { children: data.name }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/users/delete.$id.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("b", { children: "email:" }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/users/delete.$id.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("td", { children: data.email }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_react61.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
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
  let objs = await search3({ id: params.id });
  return (0, import_node40.json)(objs[0]);
}, action33 = async ({ request, params }) => (await erase8({ id: params.id }), (0, import_node40.redirect)("/users"));

// app/routes/users/update.$id.tsx
var update_id_exports9 = {};
__export(update_id_exports9, {
  action: () => action34,
  default: () => DeleteUser2,
  loader: () => loader32
});
var import_node41 = require("@remix-run/node"), import_react62 = require("@remix-run/react");
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime");
function DeleteUser2() {
  let isSubmitting = (0, import_react62.useTransition)().state === "submitting", data = (0, import_react62.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(import_jsx_dev_runtime67.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/update.$id.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h2", { children: "Update User" }, void 0, !1, {
        fileName: "app/routes/users/update.$id.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/update.$id.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(UserForm, { ...data, isSubmitting }, void 0, !1, {
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
  let objs = await search3({ id: params.id });
  return (0, import_node41.json)(objs[0]);
}, action34 = async ({ request, params }) => {
  let { user } = await getUserSession(request), { name, description } = sanitizeData({ formData: await request.formData() });
  return (await search3({ id: params.id }))[0].set({
    name,
    description,
    updatedBy: user
  }).update(), (0, import_node41.redirect)("/users");
};

// app/routes/users/create.tsx
var create_exports9 = {};
__export(create_exports9, {
  action: () => action35,
  default: () => CreateUser,
  meta: () => meta15
});
var import_node42 = require("@remix-run/node"), import_react63 = require("@remix-run/react"), import_bcryptjs3 = __toESM(require("bcryptjs"));
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime");
function CreateUser() {
  let isSubmitting = (0, import_react63.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(import_jsx_dev_runtime68.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/create.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("h2", { children: "Create a User" }, void 0, !1, {
        fileName: "app/routes/users/create.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/create.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(UserForm, { isSubmitting }, void 0, !1, {
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
var action35 = async ({ request, params }) => {
  let { name, email, password } = sanitizeData({ formData: await request.formData() }), hashPassword = await import_bcryptjs3.default.hash(password, 10);
  return await create7({
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
var import_node43 = require("@remix-run/node"), import_react64 = require("@remix-run/react");
var import_jsx_dev_runtime69 = require("react/jsx-dev-runtime");
function AllUsers() {
  let rows = (0, import_react64.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_jsx_dev_runtime69.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("h2", { children: "All Users" }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/index.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "col", children: "email" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/users/index.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(Rows9, { data: rows }, void 0, !1, {
        fileName: "app/routes/users/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users/index.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(CreateNavLink, { role: "button", to: "./create", text: "Create User" }, void 0, !1, {
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
  let rows = await readAll3();
  return (0, import_node43.json)(rows);
}, Rows9 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  email
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("td", { children: email }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 62,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/users/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
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
var import_react65 = require("@remix-run/react"), import_jsx_dev_runtime70 = require("react/jsx-dev-runtime");
function Logs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_jsx_dev_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_react65.Outlet, {}, void 0, !1, {
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
var import_node44 = require("@remix-run/node"), import_react66 = require("@remix-run/react");

// app/model/Log.tsx
var TABLE_NAME10 = "Logs", TABLE_ATTRIBUTES10 = [
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
function getAttributeValues10() {
  return TABLE_ATTRIBUTES10.map((attribute) => {
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
function set10(obj) {
  return Object.keys(obj).forEach((attribute) => this[attribute] = obj[attribute]), this;
}
async function create20() {
  return await create19(this), this;
}
async function update20() {
  return await update19(this), this;
}
Object.assign(
  Log.prototype,
  {
    getAttributeValues: getAttributeValues10,
    set: set10,
    create: create20,
    update: update20
  }
);

// app/resource/Logs.tsx
async function create19(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES10.length }, (_, index) => "?"), query = `
    INSERT INTO ${TABLE_NAME10} (${TABLE_ATTRIBUTES10.join(",")})
    VALUES (${attributePlaceHolder.join(",")})
  `;
  await db_default.execute(query, obj.getAttributeValues());
}
async function readAll9() {
  let query = `SELECT * FROM ${TABLE_NAME10}`, [rows] = await db_default.execute(query);
  return rows.map((row) => new Log(row));
}
async function update19(obj) {
  let attributePlaceHolder = Array.from({ length: TABLE_ATTRIBUTES10.length }, (_, index) => `${TABLE_ATTRIBUTES10[index]}=?`), query = `
    UPDATE ${TABLE_NAME10} 
    SET ${attributePlaceHolder.join(",")}
    WHERE id = ?
  `;
  await db_default.execute(query, [...obj.getAttributeValues(), obj.id]);
}

// app/routes/logs/index.tsx
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime");
function AllLogs() {
  let rows = (0, import_react66.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(import_jsx_dev_runtime71.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("hgroup", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("h1", { children: "Logs" }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("h2", { children: "All Logs" }, void 0, !1, {
        fileName: "app/routes/logs/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/logs/index.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("table", { role: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "#" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "name" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "description" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "created by" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "last updated by" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
          fileName: "app/routes/logs/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "col", children: "\xA0" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(Rows10, { data: rows }, void 0, !1, {
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
var Rows10 = ({ data }) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("tbody", { children: data.map(({
  id,
  name,
  description,
  createdByUserId,
  updatedByUserId
}, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("tr", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("th", { scope: "row", children: index + 1 }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 58,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: name }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: description }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 60,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: createdByUserId }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: updatedByUserId }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 62,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(UpdateNavLink, { to: `./update/${id}` }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 63,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/logs/index.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(DeleteNavLink, { to: `./delete/${id}` }, void 0, !1, {
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
  let rows = await readAll9();
  return (0, import_node44.json)(rows);
}, meta17 = () => ({
  title: "Logs - Team Task Manager",
  description: "Logs page"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HZW5MY35.js", imports: ["/build/_shared/chunk-4DNSD54X.js", "/build/_shared/chunk-X5G7LQHA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GRQ44SBE.js", imports: ["/build/_shared/chunk-ODIKV3NW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-K5J6OGIY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create-an-account": { id: "routes/create-an-account", parentId: "root", path: "create-an-account", index: void 0, caseSensitive: void 0, module: "/build/routes/create-an-account-MYFMNMOY.js", imports: ["/build/_shared/chunk-QRFVJABT.js", "/build/_shared/chunk-YMPYLBPA.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JLU4H6MT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs": { id: "routes/logs", parentId: "root", path: "logs", index: void 0, caseSensitive: void 0, module: "/build/routes/logs-RUGPMZL5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logs/index": { id: "routes/logs/index", parentId: "routes/logs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/logs/index-5XZLRRBH.js", imports: ["/build/_shared/chunk-ODIKV3NW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations": { id: "routes/organizations", parentId: "root", path: "organizations", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations-3TOB6E6V.js", imports: ["/build/_shared/chunk-EUHQXF5R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/create": { id: "routes/organizations/create", parentId: "routes/organizations", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/create-M6Q3WVL6.js", imports: ["/build/_shared/chunk-XVR365AN.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/delete.$id": { id: "routes/organizations/delete.$id", parentId: "routes/organizations", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/delete.$id-DUSFOZDC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/index": { id: "routes/organizations/index", parentId: "routes/organizations", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/organizations/index-SN7FHHJG.js", imports: ["/build/_shared/chunk-EHUQRGMG.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-ODIKV3NW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizations/update.$id": { id: "routes/organizations/update.$id", parentId: "routes/organizations", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/organizations/update.$id-GG6TO7V6.js", imports: ["/build/_shared/chunk-XVR365AN.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions": { id: "routes/permissions", parentId: "root", path: "permissions", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions-3FOSKE7Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/create": { id: "routes/permissions/create", parentId: "routes/permissions", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/create-J7T7I77W.js", imports: ["/build/_shared/chunk-ODJVC2PP.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/delete.$id": { id: "routes/permissions/delete.$id", parentId: "routes/permissions", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/delete.$id-LOCVL7AV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/index": { id: "routes/permissions/index", parentId: "routes/permissions", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/permissions/index-5AF3ZPJ3.js", imports: ["/build/_shared/chunk-ODIKV3NW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/permissions/update.$id": { id: "routes/permissions/update.$id", parentId: "routes/permissions", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/permissions/update.$id-SKPQEXC6.js", imports: ["/build/_shared/chunk-ODJVC2PP.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-ZUDCQYGA.js", imports: ["/build/_shared/chunk-EUHQXF5R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/create": { id: "routes/projects/create", parentId: "routes/projects", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/create-3CSJGDLR.js", imports: ["/build/_shared/chunk-GOSRRQMY.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/delete.$id": { id: "routes/projects/delete.$id", parentId: "routes/projects", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/delete.$id-6KIDPJNI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "routes/projects", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-3LBNTZFC.js", imports: ["/build/_shared/chunk-EHUQRGMG.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-ODIKV3NW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/update.$id": { id: "routes/projects/update.$id", parentId: "routes/projects", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/update.$id-DBTA57NP.js", imports: ["/build/_shared/chunk-GOSRRQMY.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports": { id: "routes/reports", parentId: "root", path: "reports", index: void 0, caseSensitive: void 0, module: "/build/routes/reports-ZVRWIZSX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reports/index": { id: "routes/reports/index", parentId: "routes/reports", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/reports/index-BKRF6QYT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources": { id: "routes/resources", parentId: "root", path: "resources", index: void 0, caseSensitive: void 0, module: "/build/routes/resources-5VLBCWCF.js", imports: ["/build/_shared/chunk-EUHQXF5R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/create": { id: "routes/resources/create", parentId: "routes/resources", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/create-5FDKEXHR.js", imports: ["/build/_shared/chunk-H7DMGK37.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/delete.$id": { id: "routes/resources/delete.$id", parentId: "routes/resources", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/delete.$id-N6BTJKDK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/index": { id: "routes/resources/index", parentId: "routes/resources", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/resources/index-FVYSGYMA.js", imports: ["/build/_shared/chunk-EHUQRGMG.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-ODIKV3NW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/update.$id": { id: "routes/resources/update.$id", parentId: "routes/resources", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/update.$id-WWSLJ75A.js", imports: ["/build/_shared/chunk-H7DMGK37.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles": { id: "routes/roles", parentId: "root", path: "roles", index: void 0, caseSensitive: void 0, module: "/build/routes/roles-N5ZZXZUI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/create": { id: "routes/roles/create", parentId: "routes/roles", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/create-36ETSA5V.js", imports: ["/build/_shared/chunk-TQQCOXL2.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/delete.$id": { id: "routes/roles/delete.$id", parentId: "routes/roles", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/delete.$id-JTXWJQJJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/index": { id: "routes/roles/index", parentId: "routes/roles", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/roles/index-X3OUGYA3.js", imports: ["/build/_shared/chunk-ODIKV3NW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/roles/update.$id": { id: "routes/roles/update.$id", parentId: "routes/roles", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/roles/update.$id-Z37X4E6E.js", imports: ["/build/_shared/chunk-TQQCOXL2.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-MDC24PJV.js", imports: ["/build/_shared/chunk-YMPYLBPA.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-out": { id: "routes/sign-out", parentId: "root", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-out-LILEBD4H.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks": { id: "routes/tasks", parentId: "root", path: "tasks", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks-QY7VXZXY.js", imports: ["/build/_shared/chunk-EUHQXF5R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/create": { id: "routes/tasks/create", parentId: "routes/tasks", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/create-GEUNKWZZ.js", imports: ["/build/_shared/chunk-LZGATCQQ.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/delete.$id": { id: "routes/tasks/delete.$id", parentId: "routes/tasks", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/delete.$id-OB3VPRTW.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/index": { id: "routes/tasks/index", parentId: "routes/tasks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/tasks/index-7SHX5VJI.js", imports: ["/build/_shared/chunk-EHUQRGMG.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-ODIKV3NW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tasks/update.$id": { id: "routes/tasks/update.$id", parentId: "routes/tasks", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks/update.$id-XVUG7XJA.js", imports: ["/build/_shared/chunk-LZGATCQQ.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/create": { id: "routes/taskstatus/create", parentId: "root", path: "taskstatus/create", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/create-GYKCZOQU.js", imports: ["/build/_shared/chunk-WKGKD3E5.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/delete.$id": { id: "routes/taskstatus/delete.$id", parentId: "root", path: "taskstatus/delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/delete.$id-ZI62Q2IN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/index": { id: "routes/taskstatus/index", parentId: "root", path: "taskstatus", index: !0, caseSensitive: void 0, module: "/build/routes/taskstatus/index-YRLCRFBO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/taskstatus/update.$id": { id: "routes/taskstatus/update.$id", parentId: "root", path: "taskstatus/update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/taskstatus/update.$id-AWQK7WP3.js", imports: ["/build/_shared/chunk-WKGKD3E5.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics": { id: "routes/topics", parentId: "root", path: "topics", index: void 0, caseSensitive: void 0, module: "/build/routes/topics-AFRPWVB7.js", imports: ["/build/_shared/chunk-EUHQXF5R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/create": { id: "routes/topics/create", parentId: "routes/topics", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/create-ZFOPSDV7.js", imports: ["/build/_shared/chunk-XAYMJNGU.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/delete.$id": { id: "routes/topics/delete.$id", parentId: "routes/topics", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/delete.$id-7JP7YDBM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/index": { id: "routes/topics/index", parentId: "routes/topics", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/topics/index-QJLVD3AT.js", imports: ["/build/_shared/chunk-EHUQRGMG.js", "/build/_shared/chunk-QLQLX5QX.js", "/build/_shared/chunk-ODIKV3NW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/topics/update.$id": { id: "routes/topics/update.$id", parentId: "routes/topics", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/topics/update.$id-4LFHW26M.js", imports: ["/build/_shared/chunk-XAYMJNGU.js", "/build/_shared/chunk-DQ2G53AN.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-6TFAELAB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/create": { id: "routes/users/create", parentId: "routes/users", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/users/create-MRAY5NOY.js", imports: ["/build/_shared/chunk-QRFVJABT.js", "/build/_shared/chunk-YMPYLBPA.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/delete.$id": { id: "routes/users/delete.$id", parentId: "routes/users", path: "delete/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users/delete.$id-EA7NRVTC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/index": { id: "routes/users/index", parentId: "routes/users", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/users/index-NRYPU7N7.js", imports: ["/build/_shared/chunk-ODIKV3NW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/update.$id": { id: "routes/users/update.$id", parentId: "routes/users", path: "update/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users/update.$id-QKMP5NYH.js", imports: ["/build/_shared/chunk-QRFVJABT.js", "/build/_shared/chunk-2UDNH5ND.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "bf15ac49", hmr: void 0, url: "/build/manifest-BF15AC49.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
