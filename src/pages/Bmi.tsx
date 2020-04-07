import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
        IonCard, IonCardContent, IonLabel, IonInput, IonItem, IonButton, IonChip, IonImg, IonThumbnail } from '@ionic/react';
import React from 'react';
import './Bmi.css';

export class Bmi extends React.Component<{}, any> {

    constructor(props: any){
        super(props);
        this.state = {
            height: "",
            weight: "",
            bmi: "",
            chipColor: "",
            chipText: "x"
        }
    }

    calculateBMI() {    
        let { weight, height } = this.state;

        let txt, color = ''
        let bmiRes;

        bmiRes = ((weight / height) / height).toFixed(3);

        if ( bmiRes < 18.5 ) {

            color = "warning";
            txt = "Too skinny";

        } else if (bmiRes >= 18.5 && bmiRes < 24.9 ) {

            color = "success";
            txt = "You're OK mate";

        } else if (bmiRes > 25 && bmiRes < 29.9 ) {

            color = "warning";
            txt = "A bit chubby";

        } else {

            color = "danger";
            txt = "F*cking fat!";

        }
        
        this.setState({
            bmi: bmiRes,
            chipColor: color,
            chipText: txt
        })
        
    };

    render() {
        let { height, weight, bmi, chipColor, chipText } = this.state;

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>BMI Calculator</IonTitle>
                        <IonThumbnail slot="end">
                            <IonImg src="assets/fat_bloke.png"/>
                        </IonThumbnail>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>                                
                        <IonCardContent>
                            <IonItem>
                                <IonLabel position="floating">Height (M)</IonLabel>
                                <IonInput min="0" type="number" value={height}  onIonChange={(e: any) => this.setState({ height: e.detail.value})} required inputmode="numeric"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Weight (Kg)</IonLabel>
                                <IonInput min="0" type="number" value={weight} onIonChange={(e: any) => this.setState({ weight: e.detail.value})} required inputmode="numeric"></IonInput>
                            </IonItem>         
                            <IonButton expand="block" fill="clear" onClick={() => this.calculateBMI()}><b>Calculate</b></IonButton>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent>
                            <IonItem >
                                <IonLabel>Your BMI is <b>{bmi}</b></IonLabel>
                                <IonChip color={chipColor}>
                                    <IonLabel><b>{chipText}</b></IonLabel>
                                </IonChip>                                                       
                            </IonItem>                    
                        </IonCardContent>
                    </IonCard> 
                </IonContent>
            </IonPage>    
        );
    }
};

export default Bmi;