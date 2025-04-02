"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var axios_test_1 = require("./axios-test");
var formattedDate = (0, date_fns_1.format)(new Date(), 'dd-MM-yyyy');
console.log(formattedDate);
(0, axios_test_1.fetchUsers)();
