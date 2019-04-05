import { createStatckNavigator, createAppContainer } from 'react-navigation'
import TabNavigation from '../navigation/TabNavigation'
import Detail from '../screens/Detail'



const MainNavigation = createStatckNavigator({
        TabNavigation : {
            screens : TabNavigation
        },
        Detail : {
            screens : Detail
        }
        

});


export default createAppContainer(MainNavigation);