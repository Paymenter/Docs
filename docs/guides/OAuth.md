---
title: OAuth
description: Set up OAuth login using Discord, GitHub, and Google.
---
# OAuth

A simple tutorial on how to add OAuth authorization to your Paymenter installation.

## Discord

### 1. Open the [Discord Developer Portal](https://discord.com/developers/docs/intro)

![discord_discorddev](/assets/images/guides/OAuth/discord_newapp.png)

### 2. Click "New Application", name your application, and select "Create".

### 3. Navigate to the **OAuth2** tab and click **Add Redirect**.

Use the following format for the redirect URL:

```
https://<your_app_url>/oauth/discord/callback
```

Replace `<your_app_url>` with the full URL of your Paymenter installation (including any subdirectory, if applicable).

### 4. Reset the client secret to generate a new one.

![discord_discorddev2](/assets/images/guides/OAuth/discord_discorddevfull.png)

### 5. Go to your **Paymenter Admin Panel** → **Settings** → **Login**.

![navigation_1](/assets/images/guides/OAuth/navigation.png)

### 6. Enable the **Discord** login option and paste in your **Client ID** and **Client Secret** from the Discord Developer Portal.

### 7. Click **Submit** to save your changes.

Discord OAuth is now active and visible on your login page.

## GitHub

### 1. Go to your [GitHub Settings](https://github.com/settings/profile) and scroll down to **Developer settings**.

![github_1](/assets/images/guides/OAuth/github_1.png)

### 2. Click **OAuth Apps**, then **Register a new application**.

![github_2](/assets/images/guides/OAuth/github_2.png)

### 3. Fill out the application details. Use the following as your **Authorization callback URL**:

```
https://<your_app_url>/oauth/github/callback
```

Replace `<your_app_url>` with your actual domain or server IP.

![github_3](/assets/images/guides/OAuth/github_3.png)

### 4. Click **Register application**. Then, click **Generate a new client secret**.

![github_4](/assets/images/guides/OAuth/github_4.png)

### 5. Copy your **Client ID** and **Client Secret**.

### 6. Go to your **Paymenter Admin Panel** → **Settings** → **Login**.

![navigation_2](/assets/images/guides/OAuth/navigation.png)

### 7. Enable the **GitHub** login option and paste in your **Client ID** and **Client Secret**.

### 8. Click **Submit** to save changes.

GitHub OAuth is now integrated and ready to use on your login page.

## Google

### 1. Visit the [Google Cloud Console](https://console.cloud.google.com/apis/dashboard) and create a new project.

![google_1](/assets/images/guides/OAuth/google_1.png)

### 2. Name your project and click **Create**.

![google_2](/assets/images/guides/OAuth/google_2.png)

### 3. Go to **APIs & Services** → **Credentials**, then click **Create Credentials** → **OAuth Client ID**.

![google_3](/assets/images/guides/OAuth/google_3.png)

### 4. If prompted, configure the **OAuth Consent Screen**:

- Select **External**
- Click **Continue**
- Fill in required details and click **Save and Continue** through each step
- Skip Scopes and Test Users
- Click **Back to Dashboard**

![google_4](/assets/images/guides/OAuth/google_4.png)
![google_5](/assets/images/guides/OAuth/google_5.png)
![google_6](/assets/images/guides/OAuth/google_6.png)
![google_7](/assets/images/guides/OAuth/google_7.png)
![google_8](/assets/images/guides/OAuth/google_8.png)

### 5. Back under **Credentials**, click **Create Credentials** → **OAuth Client ID**.

### 6. Choose **Web application** and add the following as an **Authorized Redirect URI**:

```
https://<your_app_url>/oauth/google/callback
```

Replace `<your_app_url>` appropriately.

![google_10](/assets/images/guides/OAuth/google_10.png)

### 7. Click **Create**. You’ll now see your **Client ID** and **Client Secret**.

![google_11](/assets/images/guides/OAuth/google_11.png)

### 8. Go to your **Paymenter Admin Panel** → **Settings** → **Social Login**

![navigation_3](/assets/images/guides/OAuth/navigation.png)

### 9. Enable the **Google** login option, paste your **Client ID** and **Client Secret**, and click **Submit**.

Google OAuth is now live on your login page.
