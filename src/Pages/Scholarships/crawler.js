import {JSDOM} from "jsdom";

async function main() {
  return getDetailsFromDiscoverBody(getHtmlBody());
}


async function getHtmlBody() {
	let htmlBody = ""
  const url = "https://cors-anywhere.herokuapp.com/https://www.discover.com/student-loans/college-planning/scholarships/directory/general"
	try {
		const response = await fetch(url)
		if (response.status > 399) {
			console.log(`Got HTTP error, status code ${response.status}`)
			return
		}
		const contentType = response.headers.get("content-type")
		if (!contentType.includes("text/html")) {
			console.log(`Got non-html response: ${contentType}`)
			return pages
		}
		htmlBody = await response.text()
	} catch (error) {
		console.log(error.message)
	}
	return htmlBody
}

async function getDetailsFromDiscoverBody(htmlBody) {
	const details = []
	const dom = new JSDOM(await htmlBody)
	const tables = dom.window.document.getElementsByClassName("odd-row")
	const tablesHidden =
		dom.window.document.getElementsByClassName("normal_small")
	for (let i = 0; i < tables.length; i++) {
		const website = tablesHidden[i].querySelector("a").getAttribute("href")
		details.push(
			parseScholarshipData(
				tables[i].textContent.trim() +
					"\n" +
					tablesHidden[i].textContent.trim() +
					"\n" +
					website
			)
		)
	}
	return details
}

function parseScholarshipData(data) {
	const lines = data.split("\n").map((line) => line.trim())

	const name = lines[0]
	const amt = lines[1]
	const deadline = lines[2]
	const eligibility = lines[3]
	const howToApply = lines[4]
	const address = lines[5] + lines[6] + lines[7]
	const website = lines[9]

	return {
		name: name,
		amount: amt,
		deadline: deadline,
		eligibility: eligibility,
		applyProcess: howToApply,
		address: address,
		website: website,
	}
}

export  {
  main
}