import { Stack, Text, Card, Image } from "@mantine/core";
import React from "react";

const Apple: React.FC = () => {
  return (
    <Stack justify="center" align="center" padding="md">
      <Text size="xl" weight={700}>
        This is Apple
      </Text>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "10px",
        }}
      >
        <Card
          shadow="sm"
          padding="xl"
          component="a"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              height={160}
              alt="No way!"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            You&apos;ve generated a million dollars!
          </Text>
          <Text mt="xs" color="dimmed" size="sm">
            Please click anywhere on this card to claim your reward, this is not
            a fraud, trust us
          </Text>
        </Card>

        {/* Repeat Card structure as needed */}
      </div>
    </Stack>
  );
};

export default Apple;

import { Stack, Text, Group, Card, Image } from "@mantine/core";
import React from "react";

export class Apple extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Stack justify="center">
          <Text>This is Apple</Text>
        </Stack>
        {/* <Group justify="center" gap={30}> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "10px",
          }}
        >
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                h={160}
                alt="No way!"
              />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              You&apos;ve generated a million dollars!
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              Please click anywhere on this card to claim your reward, this is
              not a fraud, trust us
            </Text>
          </Card>
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                h={160}
                alt="No way!"
              />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              You&apos;ve won a million dollars in cash!
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              Please click anywhere on this card to claim your reward, this is
              not a fraud, trust us
            </Text>
          </Card>
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                h={160}
                alt="No way!"
              />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              You&apos;ve earned a million dollars in cash!
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              Please click anywhere on this card to claim your reward, this is
              not a fraud, trust us
            </Text>
          </Card>
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                h={160}
                alt="No way!"
              />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
              You&apos;ve dreamed of a million dollars!
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              Please click anywhere on this card to claim your reward, this is
              not a fraud, trust us
            </Text>
          </Card>
        </div>
        {/* </Group> */}
      </>
    );
  }
}
