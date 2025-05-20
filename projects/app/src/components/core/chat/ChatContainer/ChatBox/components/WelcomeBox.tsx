import { Box, Card } from '@chakra-ui/react';
import React from 'react';
import { MessageCardStyle } from '../constants';
import Markdown from '@/components/Markdown';
import ChatAvatar from './ChatAvatar';
import { useContextSelector } from 'use-context-selector';
import { ChatItemContext } from '@/web/core/chat/context/chatItemContext';

const WelcomeBox = ({ welcomeText }: { welcomeText: string }) => {
  const appAvatar = useContextSelector(ChatItemContext, (v) => v.chatBoxData?.app?.avatar);
  // 使用正则表达式提取需要弹性布局的数据
  const result = welcomeText.split('flex--');

  let topTxt = '';
  let welcomeTextFlex: any[] = [];
  let bottomTxt = '';
  // 输出结果
  if (result.length > 0) {
    topTxt = result[0];
  }
  if (result.length > 2) {
    welcomeTextFlex = result[1].split('flex-');
  }
  if (result.length > 2) {
    bottomTxt = result[2];
  }
  return (
    <Box py={3}>
      {/* avatar */}
      <ChatAvatar src={appAvatar} type={'AI'} />
      {/* message */}
      <Box textAlign={'left'}>
        <Card
          order={2}
          mt={2}
          {...MessageCardStyle}
          bg={'white'}
          boxShadow={'0 0 8px rgba(0,0,0,0.15)'}
        >
          <Markdown source={`~~~guide \n${topTxt}`} forbidZhFormat />
          <Box display="flex" gap={'6px'} justifyContent={'space-between'} padding={'6px 0'}>
            {welcomeTextFlex.map((item, index) => {
              return (
                <Box
                  width={'33%'}
                  key={index}
                  backgroundColor={
                    index == 0
                      ? 'rgb(255 250 225)'
                      : index == 1
                        ? 'rgb(242 238 242)'
                        : 'rgba(45, 134, 235, 0.05)'
                  }
                  padding={'10px'}
                  borderRadius={'6px'}
                >
                  <Markdown source={`~~~guide \n${item}`} forbidZhFormat />
                </Box>
              );
            })}
          </Box>
          <Box display={bottomTxt ? 'block' : 'none'}>
            <Markdown source={`~~~guide \n${bottomTxt}`} forbidZhFormat />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default WelcomeBox;
