import { HapticTab } from '@/app-example/components/haptic-tab';
import { IconSymbol } from '@/app-example/components/ui/icon-symbol.ios';
import { Colors } from '@/app-example/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {

    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}>
        
            <Tabs.Screen
                name="Home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name='key' />,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'login',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}
