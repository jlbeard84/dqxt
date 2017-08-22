import { TranslationGrouping } from "./translation-grouping.model";

export class MenuTranslation {
    public originalText: string;
    public translatedText: string;
    public subMenus: TranslationGrouping;
}