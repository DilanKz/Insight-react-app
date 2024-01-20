export const CookieParser = {
    setCookies: function (jsonString: string, name: string) {

        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        document.cookie = name + "=" + encodeURIComponent(jsonString) + "; expires=" + expirationDate.toUTCString() + "; path=/";

    },

    getCookie: function (name: string): string | null {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
            const cookieValue = parts.pop()?.split(';').shift();
            return cookieValue !== undefined ? cookieValue : null;
        }

        return null;
    },

    deleteCookie: function (name: string): void {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}