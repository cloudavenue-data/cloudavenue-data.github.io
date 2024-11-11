# Modern Data Stack Insights for Developers

### Description
It is an AI-powered GitHub app designed to streamline code reviews and enhance the integrity of your data flows. By automatically analyzing pull requests, the app provides real-time insights into the impact of code changes across the modern data stack, covering tools like Fivetran, dbt, Looker, and Lightdash. With built-in technical impact analysis, it highlights functional dependencies and potential downstream effects of changes, helping data teams prevent issues early in the development process. 
<br><br>

### Installation
<details><summary>STEP 1</summary>
<br>
Follow this link to install our GitHub app - https://github.com/apps/cloud-avenue-data-insights

<img src="https://gist.github.com/user-attachments/assets/a2ecbbd9-0992-40f7-9313-3c83bab8ead4" width="600">
</details>
<br>

<details><summary>STEP 2</summary>
<br>
Choose repositories you want to get insights for.
<br><br>
<img src="https://gist.github.com/user-attachments/assets/14f88376-5eaa-40f2-abce-b351a7e997fa" height="600">
</details>
<br>

<details><summary>STEP 3</summary>
<br>
To gain insights from external platforms, connect them via API following the instructions in the next section. While on the configuration page, capture your organization name and installation ID. Both details can be found in the URL - 

`
https://github.com/organizations/<YOUR_ORG_NAME>/settings/installations/<INSTALLATION_ID>
`

</details>

<br>

### Managing External Integrations
If you need to connect any of the supported external integrations, call our API with the required details. You can use any client or refer to the instructions on the following page - https://insights.cloudavenue.ai/api/docs
<br><br>
<img src="https://gist.github.com/user-attachments/assets/401de2bc-9af1-4acf-8382-7c99a7928671" width="600">
<br>

  
#### Curl Examples
<details>
<summary>
Fivetran
</summary>
<br>
You will need to generate Fivetran API Key - https://fivetran.com/docs/rest-api/getting-started
<br><br>

```bash
curl -X POST https://insights.cloudavenue.ai/api/integrations/ \
-H "Content-Type: application/json" \
-H "x-cadata-installation: <INSTALLATION_ID>" \
-H "x-cadata-owner: <YOUR_ORG_NAME>" \
-d '{
  "name": "fivetran01",
  "type": "Fivetran",
  "connection_details": {
    "api_secret": "<FIVETRAN_API_SECRET>",
    "additional_params": {
      "api_key": "<FIVETRAN_API_KEY>"
    }
  }
}'
```
<br>
</details>

<details>
<summary>
Lightdash
</summary>
<br>
You will need to generate Lightdash access token - https://docs.lightdash.com/references/personal_tokens/
<br><br>

```bash
curl -X POST https://insights.cloudavenue.ai/api/integrations/ \
-H "Content-Type: application/json" \
-H "x-cadata-installation: <INSTALLATION_ID>" \
-H "x-cadata-owner: <YOUR_ORG_NAME>" \
-d '{
  "name": "lightdash01",
  "type": "Lightdash",
  "connection_details": {
    "api_secret": "<LIGHTDASH_API_SECRET>",
    "additional_params": {
      "base_url": "https://app.lightdash.cloud",
      "project_uuid": "<LIGHTDASH_PROJECT_UUID>"
    }
  }
}'
```
<br>
</details>
