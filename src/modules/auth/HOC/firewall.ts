import * as Petrus from "@ackee/petrus";
import { Loader } from "modules/ui";

export default function firewall(AuthContent, PublicContent) {
    return Petrus.authorizable(AuthContent, PublicContent, Loader);
}
