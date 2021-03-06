import { jsonDSLGenerator } from "danger/distribution/runner/dslGenerator"
import { jsonToDSL } from "danger/distribution/runner/jsonToDSL"
import perilPlatform from "../../danger/peril_platform"

import { GitHub } from "danger/distribution/platforms/GitHub"
import { GitHubAPI } from "danger/distribution/platforms/github/GitHubAPI"
import { dsl } from "../../danger/danger_run"

/**
 * Generates a full DSL for a PR
 *
 * @param githubAPI the Danger GithubAPI instance
 */
export const createPRDSL = async (githubAPI: GitHubAPI) => {
  const jsonDSL = await createPRJSONDSL(githubAPI)
  return await jsonToDSL(jsonDSL)
}

/**
 * Generates a full DSL for a PR
 *
 * @param githubAPI the Danger GithubAPI instance
 */
export const createPRJSONDSL = async (githubAPI: GitHubAPI) => {
  const gh = new GitHub(githubAPI)
  const platform = perilPlatform(dsl.pr, gh, {})
  return await jsonDSLGenerator(platform)
}
