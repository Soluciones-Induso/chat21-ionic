import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

// models
import { ConversationModel } from '../../models/conversation';
import { ImageRepoService } from './image-repo.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ConversationsHandlerService {

  // BehaviorSubject
  abstract BSConversationDetail: BehaviorSubject<ConversationModel> = new BehaviorSubject<ConversationModel>(null);
  abstract readAllMessages: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  abstract conversationsAdded: BehaviorSubject<ConversationModel[]> = new BehaviorSubject<ConversationModel[]>([]);
  abstract conversationsChanged: BehaviorSubject<ConversationModel[]> = new BehaviorSubject<ConversationModel[]>([]);
  abstract conversationsRemoved: BehaviorSubject<ConversationModel[]> = new BehaviorSubject<ConversationModel[]>([]);
  abstract loadedConversationsStorage: BehaviorSubject<ConversationModel[]> = new BehaviorSubject<ConversationModel[]>([]);

  // params
  abstract conversations: Array<ConversationModel> = [];
  abstract uidConvSelected: string;
  abstract imageRepo: ImageRepoService;

  // functions
  abstract initialize(tenant: string, userId: string, translationMap: Map<string, string>): void;
  abstract connect(): void;
  abstract countIsNew(): number;
  abstract dispose(): void;
  abstract getConversationDetail(tenant: string, userId: string, conversationId: string): void;
  abstract getClosingConversation(conversationId: string): boolean;
  abstract setClosingConversation(conversationId: string, status: boolean): void;
  abstract deleteClosingConversation(conversationId: string): void;

}
