/**
 * MIT License -  Copyright (c) 2017 Moshe Kolodny
 * https://github.com/kolodny/immutability-helper
 *
 * {$push: array} push() all the items in array on the target.
 * {$unshift: array} unshift() all the items in array on the target.
 * {$splice: array of arrays} for each item in arrays call splice()F
 * on the target with the parameters provided by the item.
 * {$set: any} replace the target entirely.
 * {$unset: array of strings} remove the list of keys in array from the target object.
 * {$merge: object} merge the keys of object with the target.
 * {$apply: function} passes in the current value to the function and updates it with the new returned value.
 */

import * as update from "immutability-helper";

export const Update = update;
