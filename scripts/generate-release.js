#!/usr/bin/env node
/**
 * Generate a Sentry release version
 * This script creates a unique release version based on:
 * - Git commit SHA (if available)
 * - Current timestamp
 * - Package version
 */
import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

function getGitCommit() {
	try {
		return execSync("git rev-parse --short HEAD", {
			encoding: "utf-8",
		}).trim();
	} catch {
		return null;
	}
}

function getPackageVersion() {
	try {
		const packageJson = JSON.parse(
			readFileSync(join(process.cwd(), "package.json"), "utf-8"),
		);
		return packageJson.version;
	} catch {
		return "0.0.0";
	}
}

function generateReleaseVersion() {
	const gitCommit = getGitCommit();
	const packageVersion = getPackageVersion();
	const timestamp = new Date()
		.toISOString()
		.replace(/[:.]/g, "-")
		.split(".")[0];

	if (gitCommit) {
		return `portfolio@${packageVersion}+${gitCommit}`;
	}

	return `portfolio@${packageVersion}+${timestamp}`;
}

// Generate release version
const releaseVersion = generateReleaseVersion();
console.log(`Generated Sentry release: ${releaseVersion}`);

// Write to .env.local
const envPath = join(process.cwd(), ".env.local");
let envContent = "";

if (existsSync(envPath)) {
	envContent = readFileSync(envPath, "utf-8");
}

// Update or add NEXT_PUBLIC_SENTRY_RELEASE
if (envContent.includes("NEXT_PUBLIC_SENTRY_RELEASE=")) {
	envContent = envContent.replace(
		/NEXT_PUBLIC_SENTRY_RELEASE=.*/,
		`NEXT_PUBLIC_SENTRY_RELEASE=${releaseVersion}`,
	);
} else {
	envContent += `\nNEXT_PUBLIC_SENTRY_RELEASE=${releaseVersion}\n`;
}

writeFileSync(envPath, envContent);
console.log(`Updated ${envPath} with release version`);
