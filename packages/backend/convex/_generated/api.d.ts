/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { FunctionReference } from "convex/server";
import type { GenericId as Id } from "convex/values";

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: {
  progress: {
    mutations: {
      completeStep: FunctionReference<
        "mutation",
        "public",
        { runId: Id<"runs">; stepId: string },
        any
      >;
    };
    queries: {
      getRunSteps: FunctionReference<
        "query",
        "public",
        { runId: Id<"runs"> },
        any
      >;
    };
  };
  runs: {
    mutations: {
      createRun: FunctionReference<
        "mutation",
        "public",
        {
          mapId: string;
          questId: string;
          routeId: string;
          userId: Id<"users">;
        },
        any
      >;
    };
    queries: {
      getRun: FunctionReference<"query", "public", { runId: Id<"runs"> }, any>;
    };
  };
  users: {
    mutations: {
      ensureUser: FunctionReference<
        "mutation",
        "public",
        { clerkId: string; email?: string; username?: string },
        any
      >;
    };
    queries: {
      getByClerkId: FunctionReference<
        "query",
        "public",
        { clerkId: string },
        any
      >;
    };
  };
};

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: {};

export declare const components: {};
