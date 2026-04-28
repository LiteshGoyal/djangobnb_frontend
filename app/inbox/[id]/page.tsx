import CoversationDetail from "@/app/components/inbox/CoversationDetail";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

import { getAccessToken } from "@/app/lib/actions";

// import React, { useState, useEffect } from "react";
import { UserType } from "../page";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

const ConversationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const userId = await getUserId();

  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="max-w-[1550px] max-auto px-6 py-12">
        <p>You need to be authenticated...</p>
      </main>
    );
  }
  const conversation = await apiService.get(`/api/chat/${id}/`);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <CoversationDetail
        token={token}
        userId={userId}
        conversation={conversation.conversation}
        messages={conversation.messages}
      />
    </main>
  );
};
export default ConversationPage;
