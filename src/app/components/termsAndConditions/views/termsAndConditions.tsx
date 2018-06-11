/**
 * termsAndConditions.tsx
 */
import * as React from "react";
import {
    Text,
    View
} from "react-native";

import { styles } from "../styles/styles";

class TermsAndConditions extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <View style={styles.container}>
                <Text>
                    This application is to help the practitioner to treatment plan his implant cases only
                and it cannot be a substitute to the practitioner's professional and personal judgment.
                {"\n\n"}
                    The proposed treatment plan is based on the most recent papers in the field of implantology.
                {"\n\n"} "The mplan" company has no responsibility whatsoever of the outcome of the treatment performed.
                </Text>
            </View>
        );
    }
}

export default TermsAndConditions;
