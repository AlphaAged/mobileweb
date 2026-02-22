import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonList,
  IonItem,
  IonText
} from "@ionic/react";
import { useRef, useState } from "react";
import { PhotoService } from "../core/photo.service";
import { GeminiVisionService } from "../core/gemini.service";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";

const Tab1: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const [img, setImg] = useState<Base64Image | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState<ImageAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const onFileChange = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const b64 = await PhotoService.fromFile(file);
    setImg(b64);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const onTakePhoto = async () => {
    setLoading(true);
    try {
      const b64 = await PhotoService.fromCamera();
      setImg(b64);
      setPreview(`data:${b64.mimeType};base64,${b64.base64}`);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const onAnalyze = async () => {
    if (!img) return;
    setLoading(true);
    try {
      const res = await GeminiVisionService.analyze(img);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lab08: Gemini Vision By Pheeratchai Suepsing</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          hidden
          onChange={onFileChange}
        />

        <IonButton expand="block" onClick={() => fileInput.current?.click()}>
          เลือกไฟล์ภาพ
        </IonButton>

        <IonButton expand="block" onClick={onTakePhoto}>
          ถ่ายภาพ (Camera)
        </IonButton>

        {preview && <IonImg src={preview} />}

        <IonButton
          expand="block"
          disabled={!img || loading}
          onClick={onAnalyze}
        >
          วิเคราะห์ภาพ
        </IonButton>

        {loading && <IonSpinner />}

        {result && (
          <IonCard>
            <IonCardContent>

              {/* Caption */}
              <IonText color="primary">
                <h2>{result.caption}</h2>
              </IonText>

              {/* Tags */}
              <div style={{ marginTop: 10 }}>
                {result.tags?.map((tag, index) => (
                  <IonChip key={index} color="secondary">
                    <IonLabel>{tag}</IonLabel>
                  </IonChip>
                ))}
              </div>

              {/* Objects */}
              {result.objects && (
                <>
                  <h3>วัตถุที่ตรวจพบ</h3>
                  <IonList>
                    {result.objects.map((obj, index) => (
                      <IonItem key={index}>
                        <IonLabel>
                          {obj.name}
                          {obj.confidence &&
                            ` (${(obj.confidence * 100).toFixed(1)}%)`}
                        </IonLabel>
                      </IonItem>
                    ))}
                  </IonList>
                </>
              )}

              {/* Safety */}
              {result.safety && (
                <>
                  <h3>ความปลอดภัย</h3>
                  <IonText
                    color={result.safety.isSensitive ? "danger" : "success"}
                  >
                    {result.safety.isSensitive
                      ? "⚠ อาจเป็นภาพอ่อนไหว"
                      : "✔ ปลอดภัย"}
                  </IonText>
                  {result.safety.notes && (
                    <p>{result.safety.notes}</p>
                  )}
                </>
              )}

            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;