export default function ({ redirect, app, route }) {
    // If the user is not authenticated
    if (!app.$account.get()) {
        let signUrl = app.i18n.locale == app.i18n.defaultLocale ? '/sign-in/' : `/${app.i18n.locale}/sign-in/`;
        signUrl = `${signUrl}?redirectTo=${encodeURIComponent(route.fullPath)}`;

        redirect(signUrl);
    }
}