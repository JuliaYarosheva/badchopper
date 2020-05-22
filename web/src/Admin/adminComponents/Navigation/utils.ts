import storeOutline from '@iconify/icons-mdi/store-outline';
import accountGroupOutline from '@iconify/icons-mdi/account-group-outline';
import shoppingOutline from '@iconify/icons-mdi/shopping-outline';
import chatOutline from '@iconify/icons-mdi/chat-outline';

export const getNavigationItemIcon = (iconName: string) => {
    const icons = {
        department: storeOutline,
        employee: accountGroupOutline,
        assistance: shoppingOutline,
        feedbacks: chatOutline,
    };

    return icons[iconName]
};
