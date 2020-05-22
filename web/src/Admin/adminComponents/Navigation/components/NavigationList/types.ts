export type NavigationItemType = {
    label: string;
    route: string | null;
    items: {
        label: string;
        route: string | null;
    }[]
}
